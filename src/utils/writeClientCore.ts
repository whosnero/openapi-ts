import Path from 'path';

import type { Client } from '../client/interfaces/Client';
import type { HttpClient } from '../HttpClient';
import type { Indent } from '../Indent';
import { copyFile, exists, writeFile } from './fileSystem';
import { formatIndentation as i } from './formatIndentation';
import { getHttpRequestName } from './getHttpRequestName';
import type { Templates } from './registerHandlebarTemplates';

/**
 * Generate OpenAPI core files, this includes the basic boilerplate code to handle requests.
 * @param client Client object, containing, models, schemas and services
 * @param templates The loaded handlebar templates
 * @param outputPath Directory to write the generated files to
 * @param httpClient The selected httpClient (fetch, xhr, node or axios)
 * @param indent Indentation options (4, 2 or tab)
 * @param clientName Custom client class name
 * @param request Path to custom request file
 */
export const writeClientCore = async (
    client: Client,
    templates: Templates,
    outputPath: string,
    httpClient: HttpClient,
    indent: Indent,
    clientName?: string,
    request?: string
): Promise<void> => {
    const httpRequest = getHttpRequestName(httpClient);
    const context = {
        httpClient,
        clientName,
        httpRequest,
        server: client.server,
        version: client.version,
    };

    await writeFile(Path.resolve(outputPath, 'OpenAPI.ts'), i(templates.core.settings(context), indent));
    await writeFile(Path.resolve(outputPath, 'ApiError.ts'), i(templates.core.apiError(context), indent));
    await writeFile(
        Path.resolve(outputPath, 'ApiRequestOptions.ts'),
        i(templates.core.apiRequestOptions(context), indent)
    );
    await writeFile(Path.resolve(outputPath, 'ApiResult.ts'), i(templates.core.apiResult(context), indent));
    await writeFile(
        Path.resolve(outputPath, 'CancelablePromise.ts'),
        i(templates.core.cancelablePromise(context), indent)
    );
    await writeFile(Path.resolve(outputPath, 'request.ts'), i(templates.core.request(context), indent));
    await writeFile(Path.resolve(outputPath, 'types.ts'), i(templates.core.types(context), indent));

    if (Boolean(clientName)) {
        await writeFile(
            Path.resolve(outputPath, 'BaseHttpRequest.ts'),
            i(templates.core.baseHttpRequest(context), indent)
        );
        await writeFile(Path.resolve(outputPath, `${httpRequest}.ts`), i(templates.core.httpRequest(context), indent));
    }

    if (request) {
        const requestFile = Path.resolve(process.cwd(), request);
        const requestFileExists = await exists(requestFile);
        if (!requestFileExists) {
            throw new Error(`Custom request file "${requestFile}" does not exists`);
        }
        await copyFile(requestFile, Path.resolve(outputPath, 'request.ts'));
    }
};
