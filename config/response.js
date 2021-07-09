module.exports = {

    commonError:{
        error: true,
        msg : 'Terjadi Kesalahan Pada Server Nih'
    },
    commonErrorMsg: (msg) => {
        return {
            error: true,
            msg : msg
        }
    },
    commonSuccess: {
        error: false,
        msg : 'Berhasil Memuat Permintaan Nih'
    },
    commonSuccessMsg: (msg) => {
        return {
            error: false,
            msg : msg
        }
    },
    commonResult: (data) => {
        return {
            error : false,
            msg : 'Berhasil Memuat Data Nih',
            data : data
        }
    }

};