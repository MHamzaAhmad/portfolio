import cld from "@/config/cloudinary";
import { CloudinaryServices } from "./types";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";

const useCloudinary = (): CloudinaryServices => {
  return {
    getImgOptimized: (dto) => {
      const { name, quality: qua = "auto" } = dto;
      const img = cld.image(name).delivery(quality(auto()));
      return img.toURL();
    },
  };
};

export default useCloudinary;
