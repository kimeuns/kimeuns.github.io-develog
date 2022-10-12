import {createSlice} from '@reduxjs/toolkit'

let post = createSlice({
  name: "post",
  initialState: [
    { id: 0, title: "TIL day 1", body: "팬데믹 시대의 고독한 시간을 보내며 영화 ‘아비정전’이 문득 머릿속에 떠올랐다. 지겹도록 외로웠던 시절에 관한 아련한 추억 때문이었을까? 막상 보고 싶은 마음은 생겼지만, 미국에서 90년대 홍콩 영화를 어떻게 구해서 볼 수 있을지 의문이 들어 지레 포기했었다. 그래도 혹시나 해서 알아봤더니 구독하는 HBO MAX에 있길래 내친김에 스트리밍해서 아내랑 보기 ", img: 'http://files.itworld.co.kr/archive/slide_legacy-620x468.jpg',like:0},
    { id: 1, title: "TIL day 2", body: "특히 No Code 도구에 대해서는 생각이 깊다. 앞으로도 다양한 No Code 제품이 나올 것이고, 거기에서 생산되는 Base Application 들과 차별화된 사용자 경험을 제공하는 애플리케이션들이 결국 살아남을 테지만, 그렇게 만들기 위해서는 무엇보다 사용자 경험에 관심을 두고 있는 프로덕트 엔지니어들이 필요하다.", img:'https://images.velog.io/images/kykim_dev/post/01072efe-a161-4dc6-a4d3-f83c1c3f1d8f/AC098054-A4EC-4DB3-8111-13D5D8868826.png', like:0},
  ],
  reducers: {
    addPost(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        like: 0
      });
    },
    editLike(state, action){
        let idx = state.findIndex(v=> v.id == action.payload)
        state[idx].like++
    },
    deletePost(state, action) {
      let idx = state.findIndex((v) => v.id == action.payload);
      state.splice(idx, 1);
    },
  },
});

export let {addPost, editLike, deletePost} = post.actions
export default post;
