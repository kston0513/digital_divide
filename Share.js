function kakaoShare() {
    Kakao.Share.sendScrap({
        requestUrl: currentPageUrl,
    });
}