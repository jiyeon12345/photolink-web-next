/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // * Styled Components의 서버사이드 렌더링을 가능하게 하기 위한 설정
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      ...defaultPathMap,
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig
