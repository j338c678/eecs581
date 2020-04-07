<script>
const UserToken=""

export default {
    UserToken,
    setUserToken(token){
        this.UserToken = token
    },
    getDatesCreated(){
        var t1=new Date(this.UserToken.data.createdAt)
        var t2=new Date()
        let result = Math.round((t2.getTime()-t1.getTime())/1000/60/60/24)
        if(result<=1){
            result+="1 Day in Let's Talk"
        }
        else{
            result+=" Days in Let's Talk"
        }
        return(result)
    }
}
</script>