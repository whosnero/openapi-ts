// This file is auto-generated by @hey-api/openapi-ts

export type Order = {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  /**
   * Order Status
   */
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
};

/**
 * Order Status
 */
export type status = 'placed' | 'approved' | 'delivered';

export type Customer = {
  id?: number;
  username?: string;
  address?: Array<Address>;
};

export type Address = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export type Category = {
  id?: number;
  name?: string;
};

export type User = {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /**
   * User Status
   */
  userStatus?: number;
};

export type Tag = {
  id?: number;
  name?: string;
};

export type Pet = {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: Array<string>;
  tags?: Array<Tag>;
  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';
};

export type ApiResponse = {
  code?: number;
  type?: string;
  message?: string;
};

export type PetAddPetData = {
  /**
   * Create a new pet in the store
   */
  requestBody: Pet;
};

export type PetAddPetResponse = Pet;

export type PetUpdatePetData = {
  /**
   * Update an existent pet in the store
   */
  requestBody: Pet;
};

export type PetUpdatePetResponse = Pet;

export type PetFindPetsByStatusData = {
  /**
   * Status values that need to be considered for filter
   */
  status?: 'available' | 'pending' | 'sold';
};

export type PetFindPetsByStatusResponse = Array<Pet>;

export type PetFindPetsByTagsData = {
  /**
   * Tags to filter by
   */
  tags?: Array<string>;
};

export type PetFindPetsByTagsResponse = Array<Pet>;

export type PetGetPetByIdData = {
  /**
   * ID of pet to return
   */
  petId: number;
};

export type PetGetPetByIdResponse = Pet;

export type PetUpdatePetWithFormData = {
  /**
   * Name of pet that needs to be updated
   */
  name?: string;
  /**
   * ID of pet that needs to be updated
   */
  petId: number;
  /**
   * Status of pet that needs to be updated
   */
  status?: string;
};

export type PetDeletePetData = {
  apiKey?: string;
  /**
   * Pet id to delete
   */
  petId: number;
};

export type PetUploadFileData = {
  /**
   * Additional Metadata
   */
  additionalMetadata?: string;
  /**
   * ID of pet to update
   */
  petId: number;
  requestBody?: Blob | File;
};

export type PetUploadFileResponse = ApiResponse;

export type StoreGetInventoryResponse = {
  [key: string]: number;
};

export type StorePlaceOrderData = {
  requestBody?: Order;
};

export type StorePlaceOrderResponse = Order;

export type StoreGetOrderByIdData = {
  /**
   * ID of order that needs to be fetched
   */
  orderId: number;
};

export type StoreGetOrderByIdResponse = Order;

export type StoreDeleteOrderData = {
  /**
   * ID of the order that needs to be deleted
   */
  orderId: number;
};

export type UserCreateUserData = {
  /**
   * Created user object
   */
  requestBody?: User;
};

export type UserCreateUserResponse = User;

export type UserCreateUsersWithListInputData = {
  requestBody?: Array<User>;
};

export type UserCreateUsersWithListInputResponse = User | unknown;

export type UserLoginUserData = {
  /**
   * The password for login in clear text
   */
  password?: string;
  /**
   * The user name for login
   */
  username?: string;
};

export type UserLoginUserResponse = string;

export type UserLogoutUserResponse = unknown;

export type UserGetUserByNameData = {
  /**
   * The name that needs to be fetched. Use user1 for testing.
   */
  username: string;
};

export type UserGetUserByNameResponse = User;

export type UserUpdateUserData = {
  /**
   * Update an existent user in the store
   */
  requestBody?: User;
  /**
   * name that needs to be updated
   */
  username: string;
};

export type UserUpdateUserResponse = unknown;

export type UserDeleteUserData = {
  /**
   * The name that needs to be deleted
   */
  username: string;
};

export type $OpenApiTs = {
  '/pet': {
    post: {
      req: {
        /**
         * Create a new pet in the store
         */
        requestBody: Pet;
      };
      res: {
        /**
         * Successful operation
         */
        200: Pet;
        /**
         * Invalid input
         */
        405: unknown;
      };
    };
    put: {
      req: {
        /**
         * Update an existent pet in the store
         */
        requestBody: Pet;
      };
      res: {
        /**
         * Successful operation
         */
        200: Pet;
        /**
         * Invalid ID supplied
         */
        400: unknown;
        /**
         * Pet not found
         */
        404: unknown;
        /**
         * Validation exception
         */
        405: unknown;
      };
    };
  };
  '/pet/findByStatus': {
    get: {
      req: {
        /**
         * Status values that need to be considered for filter
         */
        status?: 'available' | 'pending' | 'sold';
      };
      res: {
        /**
         * successful operation
         */
        200: Array<Pet>;
        /**
         * Invalid status value
         */
        400: unknown;
      };
    };
  };
  '/pet/findByTags': {
    get: {
      req: {
        /**
         * Tags to filter by
         */
        tags?: Array<string>;
      };
      res: {
        /**
         * successful operation
         */
        200: Array<Pet>;
        /**
         * Invalid tag value
         */
        400: unknown;
      };
    };
  };
  '/pet/{petId}': {
    get: {
      req: {
        /**
         * ID of pet to return
         */
        petId: number;
      };
      res: {
        /**
         * successful operation
         */
        200: Pet;
        /**
         * Invalid ID supplied
         */
        400: unknown;
        /**
         * Pet not found
         */
        404: unknown;
      };
    };
    post: {
      req: {
        /**
         * Name of pet that needs to be updated
         */
        name?: string;
        /**
         * ID of pet that needs to be updated
         */
        petId: number;
        /**
         * Status of pet that needs to be updated
         */
        status?: string;
      };
      res: {
        /**
         * Invalid input
         */
        405: unknown;
      };
    };
    delete: {
      req: {
        apiKey?: string;
        /**
         * Pet id to delete
         */
        petId: number;
      };
      res: {
        /**
         * Invalid pet value
         */
        400: unknown;
      };
    };
  };
  '/pet/{petId}/uploadImage': {
    post: {
      req: {
        /**
         * Additional Metadata
         */
        additionalMetadata?: string;
        /**
         * ID of pet to update
         */
        petId: number;
        requestBody?: Blob | File;
      };
      res: {
        /**
         * successful operation
         */
        200: ApiResponse;
      };
    };
  };
  '/store/inventory': {
    get: {
      res: {
        /**
         * successful operation
         */
        200: {
          [key: string]: number;
        };
      };
    };
  };
  '/store/order': {
    post: {
      req: {
        requestBody?: Order;
      };
      res: {
        /**
         * successful operation
         */
        200: Order;
        /**
         * Invalid input
         */
        405: unknown;
      };
    };
  };
  '/store/order/{orderId}': {
    get: {
      req: {
        /**
         * ID of order that needs to be fetched
         */
        orderId: number;
      };
      res: {
        /**
         * successful operation
         */
        200: Order;
        /**
         * Invalid ID supplied
         */
        400: unknown;
        /**
         * Order not found
         */
        404: unknown;
      };
    };
    delete: {
      req: {
        /**
         * ID of the order that needs to be deleted
         */
        orderId: number;
      };
      res: {
        /**
         * Invalid ID supplied
         */
        400: unknown;
        /**
         * Order not found
         */
        404: unknown;
      };
    };
  };
  '/user': {
    post: {
      req: {
        /**
         * Created user object
         */
        requestBody?: User;
      };
      res: {
        /**
         * successful operation
         */
        default: User;
      };
    };
  };
  '/user/createWithList': {
    post: {
      req: {
        requestBody?: Array<User>;
      };
      res: {
        /**
         * Successful operation
         */
        200: User;
        /**
         * successful operation
         */
        default: unknown;
      };
    };
  };
  '/user/login': {
    get: {
      req: {
        /**
         * The password for login in clear text
         */
        password?: string;
        /**
         * The user name for login
         */
        username?: string;
      };
      res: {
        /**
         * successful operation
         */
        200: string;
        /**
         * Invalid username/password supplied
         */
        400: unknown;
      };
    };
  };
  '/user/logout': {
    get: {
      res: {
        /**
         * successful operation
         */
        default: unknown;
      };
    };
  };
  '/user/{username}': {
    get: {
      req: {
        /**
         * The name that needs to be fetched. Use user1 for testing.
         */
        username: string;
      };
      res: {
        /**
         * successful operation
         */
        200: User;
        /**
         * Invalid username supplied
         */
        400: unknown;
        /**
         * User not found
         */
        404: unknown;
      };
    };
    put: {
      req: {
        /**
         * Update an existent user in the store
         */
        requestBody?: User;
        /**
         * name that needs to be updated
         */
        username: string;
      };
      res: {
        /**
         * successful operation
         */
        default: unknown;
      };
    };
    delete: {
      req: {
        /**
         * The name that needs to be deleted
         */
        username: string;
      };
      res: {
        /**
         * Invalid username supplied
         */
        400: unknown;
        /**
         * User not found
         */
        404: unknown;
      };
    };
  };
};
