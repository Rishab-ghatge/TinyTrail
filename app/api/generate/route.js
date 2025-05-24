// import clientPromise from "@/lib/mongodb"

// export async function POST(request){

//   const body = await request.json()
//   const client = await clientPromise;
//   const db = client.db("TinyTrail")
//   const collection = db.collection("url")

//   //Check if the short url exists
//   const doc = await collection.findOne({shorturl: body.shorturl})
//   if(doc){
//     return Response.json({ success: false, error: true, message:'URL already exist' })
//   }


//   const result =  await collection.insertOne({
//     url: body.url,
//     shorturl: body.shorturl
//   })

//   return Response.json({ success: true, error: false, message:'URL generated successfully' })
// }
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("TinyTrail");
    const collection = db.collection("url");

    // Check if the short url exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return new Response(
        JSON.stringify({
          success: false,
          error: true,
          message: "URL already exists",
        }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return new Response(
      JSON.stringify({
        success: true,
        error: false,
        message: "URL generated successfully",
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: error.message || "Internal Server Error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
