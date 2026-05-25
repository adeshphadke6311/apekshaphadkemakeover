
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name:
    process.env
      .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,

  api_key:
    process.env
      .CLOUDINARY_API_KEY,

  api_secret:
    process.env
      .CLOUDINARY_API_SECRET,
});

export async function POST(
  req: Request
) {
  try {
    const data =
      await req.formData();

    const file =
      data.get("file") as File;

    if (!file) {
      return Response.json(
        {
          error: "No file",
        },
        { status: 400 }
      );
    }

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    const uploadResponse =
      await new Promise(
        (
          resolve,
          reject
        ) => {

          cloudinary.uploader
            .upload_stream(
              {
                resource_type:
                  "auto",
                folder:
                  "sajshringar",
              },

              (
                error,
                result
              ) => {

                if (error)
                  reject(error);

                else
                  resolve(result);
              }
            )
            .end(buffer);
        }
      );

    return Response.json(
      uploadResponse
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        error:
          "Upload Failed",
      },
      { status: 500 }
    );
  }
}