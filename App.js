const menuData = {
    '소개': [
        { title: '제작 의도', description: '이 프로젝트를 시작하게된 계기를 알아보세요.', link: '/pages/notnow.html' },
        { title: '개발자', description: '제작한 사람 소개입니다. (안봐도 무방).', link: '/pages/notnow.html' },
        { title: '참고', description: '제작 과정에서 참고한 자료입니다.', link: '/pages/notnow.html' }
    ],
    '어플리케이션': [
        { title: '전화', description: '전화 걸기, 받기, 연락처 추가 방법을 알아보세요.', link: '/pages/notnow.html' },
        { title: '문자', description: '문자를 보내고 받는 방법에 대해 알아보세요.', link: '/pages/notnow.html' },
        { title: '카메라', description: '카메라 사용 방법에 대해 알아보세요.', link: '/pages/camera.html' },
        { title: '네이버', description: '네이버 앱에서 검색하는 방법을 알아보세요.', link: '/pages/notnow.html' },
        { title: '카카오톡', description: '카카오톡을 사용하는 방법에 대해 알아보세요.', link: '/pages/kakaotalk.html' },
        { title: '유튜브', description: '유튜브 앱을 사용하는 방법에 대해 알아보세요.', link: '/pages/notnow.html' },
        { title: '음악', description: '음악 앱을 사용하는 방법에 대해 알아보세요.', link: '/pages/music.html' }
    ],
    '기본조작': [
        { title: '소리 및 진동', description: '핸드폰의 소리 및 진동 기능에 대해 알아보세요.', link: '/pages/notnow.html' },
        { title: '복사 및 붙여넣기', description: '글자를 복사하고 붙여넣는 방법을 알아보세요.', link: '/pages/notnow.html' },
        { title: '스크린샷', description: '스크린샷을 촬영하는 방법을 알아보세요.', link: '/pages/notnow.html' },
        { title: '앱 설치', description: '어플리케이션을 설치하는 방법에 대해 알아보세요.', link: '/pages/notnow.html' }
    ]
};

function Header() {
    return (
        <header className="outter_header">
            <div className="inner_header">
                <div className="head_menu_btn"></div>
                <div className="head_logo">
                    <a href="/index.html" type="button" className="main_logo">
                        <img src="/icons/logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="high_cont">
                    <a href="" type="button" className="cont_btn">
                        <img src="/icons/cont_btn.svg" alt="contrast" />
                    </a>
                </div>
            </div>
        </header>
    );
}

function MenuItem({ topic, selectedTopic, setSelectedTopic }) {
    return (
        <button
            className={`menu-item ${selectedTopic === topic ? 'selected' : ''}`}
            onClick={() => setSelectedTopic(topic)}
        >
            {topic}
        </button>
    );
}

function SubMenu({ topic }) {
    const subTopics = menuData[topic];
    return (
        <div className="submenu">
            <ul className="submenu-list">
                {subTopics.map((subTopic, index) => (
                    <li key={index} className="submenu-item">
                        <a href={subTopic.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <strong>{subTopic.title}</strong>
                            <p>{subTopic.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    // 초기 상태를 '어플리케이션'으로 설정
    const [selectedTopic, setSelectedTopic] = React.useState('어플리케이션');

    return (
        <div id="layout">
            <Header />
            <div className="container">
                <div className="menu">
                    {Object.keys(menuData).map((topic, index) => (
                        <MenuItem
                            key={index}
                            topic={topic}
                            selectedTopic={selectedTopic}
                            setSelectedTopic={setSelectedTopic}
                        />
                    ))}
                </div>
                {selectedTopic && <SubMenu topic={selectedTopic} />}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));