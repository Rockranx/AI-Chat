export const adminCheck = (req, res, next)=>{
    if(req.user && req.user.role === 'admin'){
        next()
    } else { 
        res.status(403).json({
            error:"Admin privileges required",
            code: 'ACCESS DENIED'
        })
    }
}

export const moderatorCheck= (req, res, next)=>{
    if(req.user && (req.user.role === 'admin' || req.user.role === 'moderator')){
        next()
    } else{
           res.status(403).json({
            error:"Moderator privileges required",
            code: 'ACCESS DENIED'
        })
    }
}