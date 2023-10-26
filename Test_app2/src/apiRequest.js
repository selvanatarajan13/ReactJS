const apiRequest = async (url='',optionObj=null,errorMesge=null) => {
    try {
        const response = await fetch(url,optionObj)
        if(!response.ok) throw Error("Server is not connect2222!!")
    } catch (error) {
        errorMesge = error.message;
    } finally{
        console.log(errorMesge)
    }
};

export default apiRequest;