import Noimage from "../assets/no-image-placeholder-6f3882e0.webp";
const GetcropedImageUrl = (Url: string) => {
  if (!Url) return Noimage;
  const target = "media/";
  const index = Url.indexOf(target) + target.length;
  return Url.slice(0, index) + "crop/600/400/" + Url.slice(index);
};

export default GetcropedImageUrl;
