import axios from 'axios';

const api = 'https://anibla-project.herokuapp.com/';
const headers = {
    headers : {
        "X-Requested-With" : "XMLHttpRequest"
    }
}

export const login = (data) => {
    console.log(data);
    return new Promise( (resolve,reject) => {
        axios.interceptors.request.use( conf => {
            console.log(conf.data);
            return conf;
        })
        axios.post(`${api}/api/auth/login/`,data,headers)
        .then( res => {
            let token = res;
            axios.get(`${api}auth/users/me/`,{
                headers : {
                    'Authorization' : `Token ${res.data.auth_token}`
                }
            }).then( res => {
                let type = res.data.type;
                let userID = res.data.id;
                axios.get(`${api}content_type/`,{
                    headers : {
                        'Authorization' : `Token ${token.data.auth_token}`
                    }
                }).then( res => {
                    let id = res.data.results.find( (item,index)=> item.model === `${type}more` && item);
                    localStorage.setItem('userTypeId',JSON.stringify(id.id));
                    axios.get(`${api}${type}/${userID}/`,{
                        headers : {
                            'Authorization' : `Token ${token.data.auth_token}`
                        }
                    })
                    .then( res => {
                        localStorage.setItem('objectID',res.data.more.id);
                        resolve(token)
                    })
                })
            })
        })
        .catch( err => {
            console.log(err.request.response);
            reject(err);
        });
    })
}