import { name } from "@cloudinary/url-gen/actions/namedTransformation";

export interface CloudinaryServices {
  getImgOptimized: Actions.GetImgOptimzedAction;
}

export namespace Actions {
  export interface GetImgOptimzedAction {
    (dto: DTOs.GetImgOptimizedDTO): string;
  }
}

export namespace DTOs {
  export interface GetImgOptimizedDTO {
    name: string;
    quality?: number | "auto";
  }
}
