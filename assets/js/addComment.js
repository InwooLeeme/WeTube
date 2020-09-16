import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");

// comment를 보내는 함수
const sendComment = async (comment) => {
  //console.log(comment);
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "post",
    data: {
      comment,
    },
  });
  console.log(response);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
