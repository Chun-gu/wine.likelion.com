// fetch를 쉽게 해주는 axios를 갖고옵니다.
import axios from "axios";

// fetcher는 "자료형이 stirng이어야 하는 url"을 받아서 그 url에 해당하는 API에서 data를 받아옵니다."
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);