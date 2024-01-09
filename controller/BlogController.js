const BlogModel = require('../model/BlogModel');




exports.create = async (req , res ) => {
    try {
        const title = req.body.title;
        const body = req.body.body;
        const image = req.body.image;
        const userid = req.body.userid;

        if(!title || !body || !image || !userid){
            return res.json({
                msg : "Please enter all data",
                state : 0,
                data : [],
            })
        }
    
        await BlogModel.create({
            title: title,
            body: body,
            image: image,
            createdBy : userid,
            date : new Date()
        }).then((data) => {
            res.json({
                msg : "Blog created successfully",
                state : 1,
                data : data
            })
        }).catch((err) => {
            console.log(err)
            res.json({
                msg : "Internal Server Error"  + err,
                state : 0,
                data : []
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal Server Error"  + err,
            state : 0,
            data : []
        })
    }
    
}


exports.getall = async (req , res ) => {
     try {
        const blogs = await BlogModel.find();
        if(blogs){
            return res.json({
                msg : "",
                state : 1,
                data : blogs
            })
        }

         res.json({
            msg : "Cant find any blog or somthing not work ",
            state : 1,
            data : blogs
        })
     } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal Server Error",
            state : 1,
            data : []
        })
     }
        
}

exports.getbyid = async (req , res ) => {

    try {
        const blog = await BlogModel.findById(req.params.id);
        if(blog){
            return res.json({
                msg : "",
                state : 1,
                data : blog
            })
        }

        res.json({
            msg : "Cant find any blog ",
            state : 1,
            data : blog
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal Server Error",
            state : 1,
            data : []
        })
    }
}


exports.getallbyid = async (req , res ) => {
    const id = req.params.id
    try {
        const blogs = await BlogModel.find({ createdBy : id});
        if(blogs){
            return res.json({
                msg : "",
                state : 1,
                data : blogs
            })
        }

         res.json({
            msg : "Cant find any blog or somthing not work ",
            state : 1,
            data : blogs
        })
     } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal Server Error 🚨",
            state : 1,
            data : []
        })
     }
        

}

exports.update = async (req , res ) => {

    try {
        await BlogModel.findOneAndUpdate({_id : req.query.id}, 
            {state : false} ).then(() => {
            res.json({
                msg : "Blog updated successfully",
                state: 1,
                date : []
            })
        }).catch(error => {
            console.log(error)
            res.json({
                msg : "Internal server",
                state : 0,
                data : []
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal server",
            state : 0,
            data : []
        })
    }

}

exports.delete = async (req , res ) => {
    try {
        await BlogModel.findOneAndDelete({_id : req.query.id}).then(() => {
            res.json({
                msg : "BLog deleted  successfully 👍🏼",
                state: 1,
                date : []
            })
        }).catch(error => {
            console.log(eror)
            res.json({
                msg : "Internal server",
                state : 0,
                data : []
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal server",
            state : 0,
            data : []
        })
    }
}