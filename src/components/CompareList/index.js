import React from "react";

const CompareList = () => (
    <div>
        <div>
            <header>
                <img
                    src="https://avatars3.githubusercontent.com/u/69631?v=4"
                    alt="facebook"
                />
                <strong>react</strong>
                <small>facebook</small>
            </header>

            <ul>
                <li>
                    96,019 <small>stars</small>
                </li>
            </ul>
            <ul>
                <li>
                    96,019 <small>forks</small>
                </li>
            </ul>
            <ul>
                <li>
                    96,019 <small>issues</small>
                </li>
            </ul>
            <ul>
                <li>
                    3 days ago <small>last commit</small>
                </li>
            </ul>
        </div>
    </div>
);

export default CompareList;

// const Main = () => (
//     <div>
//         <img src={logo} alt="Github Compare" />

//         <Container>
//             <Form>
//                 <input type="text" placeholder="user/repository" />
//                 <button type="submit">OK</button>
//             </Form>
//         </Container>
//     </div>
// );

// export default Main;
