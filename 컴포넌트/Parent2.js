import React from "react";
import Child from "./Child";

function Parent() {
    return (
        <div>
            <h1>부모 컴포넌트</h1>
            <Child name="홍길동" /> {/* props를 통해 데이터 전달 */}
        </div>
    );
}

export default Parent;