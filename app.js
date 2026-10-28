import express from "express"

const app =express()

const users= Array.from({length:100}).map((_,index)=>({
    id:index+1,
    name:`user ${index+1}`
}))
// console.log(users)
app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to express js"
    })
})

app.get("/users",(req,res)=>{
    const page= parseInt(req.query.page)||1
    const limit= parseInt(req.query.limit)||10

    const startIndex=(page-1)* limit
    const endIndex=(page*limit)

    const results=users.slice(startIndex,endIndex)

    res.json({
        currentPage:page,
        totalPages:Math.ceil(users.length/limit),
        totalUsers:users.length,
        data:results
    })


})
app.listen(4000,()=>{
console.log("server is running on: http://localhost:4000")
})