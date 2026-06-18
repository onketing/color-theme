/**
 * 루트(/) 및 잘못된 slug 접속 시 보여주는 중립 랜딩.
 * 업체 목록을 노출하지 않아, 공유받은 업체별 링크로만 색감을 볼 수 있습니다.
 * @param {{ notFound?: boolean }} props
 */
export default function Landing({ notFound = false }) {
  return (
    <div className="grid min-h-screen place-items-center bg-[#f7f5f2] px-6">
      <div className="w-full max-w-md text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-neutral-900 text-xl font-black text-white">
          O
        </span>
        <h1 className="mt-6 text-2xl font-black tracking-tight text-neutral-900">
          온케팅 컬러 테마
        </h1>

        {notFound ? (
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
            요청하신 업체 페이지를 찾을 수 없습니다.
            <br />
            공유받은 링크 주소를 다시 확인해 주세요.
          </p>
        ) : (
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
            의뢰업체별 색감 제안 페이지입니다.
            <br />
            <strong className="font-semibold text-neutral-700">공유받은 전용 링크</strong>로 접속해
            주세요.
          </p>
        )}

        <p className="mt-8 font-mono text-[12px] text-neutral-400">onketing.com</p>
      </div>
    </div>
  );
}
