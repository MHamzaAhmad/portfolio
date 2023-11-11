export interface FirestoreServices {
  addContactMessage: Actions.AddContactMessageAction;
}

export namespace Actions {
  export interface AddContactMessageAction {
    (params: DTOs.ContactMessageDTO): Promise<void>;
  }
}

export namespace DTOs {
  export interface ContactMessageDTO {
    name: string;
    email: string;
    message: string;
    createdAt: Date;
  }
}
