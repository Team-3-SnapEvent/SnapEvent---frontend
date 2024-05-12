const VITE_API_URL_SOCIAL_GOOGLE = 'https://snapevent.site/oauth2/authorization/google';
const VITE_API_URL_SOCIAL_NAVER = 'https://snapevent.site/oauth2/authorization/naver';
const VITE_API_URL_SOCIAL_KAKAO = 'https://snapevent.site/oauth2/authorization/kakao';
type fetchData= () => void;
const socialLogIn : fetchData =  () => {
    fetch(VITE_API_URL_SOCIAL_GOOGLE).then((response)=> (response.json())).then((res)=>(console.log(res)));
};

export const socialKakao : fetchData = async () => {
    /*const response = await fetch(VITE_API_URL_SOCIAL_KAKAO);
    try {
        if (response.ok) {
            const data = await response.json(); 
            console.log(data);
        } else {
            throw new Error('API 통신 실패: ' + response.statusText);
        }
    } catch (error) {
        console.log(error);
    }*/
    fetch(VITE_API_URL_SOCIAL_KAKAO).then((response)=> (response.json())).then((res)=>(console.log(res)));
}; 

export const socialNaver : fetchData = async () => {
    /*const response = await fetch(VITE_API_URL_SOCIAL_NAVER);
    try {
        if (response.ok) {
            const data = await response.json(); 
            console.log(data);
        } else {
            throw new Error('API 통신 실패: ' + response.statusText);
        }
    } catch (error) {
        console.log(error);
    }*/
    fetch(VITE_API_URL_SOCIAL_NAVER).then((response)=> (response.json())).then((res)=>(console.log(res)));
}; 
export default socialLogIn;