document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("comment-list");

    submitBtn.addEventListener("click", function () {
        console.log("등록 버튼 클릭됨"); // 디버깅용 로그

        const commentText = commentInput.value.trim();
        if (commentText === "") return;

        console.log("입력된 댓글 내용:", commentText); // 디버깅용 로그

        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `
            <span class="user-name">방문자</span>
            <p>${commentText}</p>
            <button class="delete-btn">삭제</button>
        `;

        // 삭제 버튼 이벤트 추가
        newComment.querySelector(".delete-btn").addEventListener("click", function () {
            console.log("삭제 버튼 클릭됨"); // 디버깅용 로그
            newComment.remove();
        });

        // 댓글 리스트에 추가
        commentList.appendChild(newComment);

        // 입력창 초기화
        commentInput.value = "";
    });

    cancelBtn.addEventListener("click", function () {
        commentInput.value = "";
    });
});
