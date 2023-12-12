import { MongoClient } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

interface iBody {
  name: string
  image: string
  value: number
  note: number
}

export async function POST(req: NextRequest) {
  try {
    const body: iBody = await req.json()

    const { name, image, value, note } = body
  
    if(!name || !image || !value || !note){
      return NextResponse.json({
        message: "Envie todos os campos: 'name', 'image', 'value' e 'note'.",
      }, 
      {
        status: 400
      })
    }
    
    const client = await MongoClient.
      connect("mongodb+srv://wesleydematos3:0ohqM4f7yMFRPPCu@cluster0.iozycrx.mongodb.net/?retryWrites=true&w=majority")
    
    const db = client.db()
    const productsCollection = db.collection("products")

    await productsCollection.insertOne({ name, image, value, note })

    client.close()
  
    return NextResponse.json({
        product: body,
      }, 
      {
        status: 201
      })
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error
    }, 
    {
      status: 500
    })
  }
}

export async function GET() {
  try {
    const client = await MongoClient.
    connect("mongodb+srv://wesleydematos3:0ohqM4f7yMFRPPCu@cluster0.iozycrx.mongodb.net/?retryWrites=true&w=majority")
  
    const db = client.db()
    
    const productsCollection = db.collection("products")

    const allProducts = await productsCollection.find().toArray()

    client.close()

    return NextResponse.json(allProducts)
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error
    }, 
    {
      status: 500
    })
  }
}