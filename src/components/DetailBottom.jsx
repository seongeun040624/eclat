import React from 'react';
import '../style/detailbottom.scss';

import { IoIosArrowDown } from "react-icons/io";

const DetailBottom = () => {
    return (
        <div className='detailBottom'>
            <ul>
                <li><span>상세정보</span>
                    <ul>
                        <li>· 내용물의 용량 또는 중량: 100 ml / 200ml </li>
                        <li>· 제품 주요 사양: 모든 피부용</li>
                        <li>· 사용기한 또는 개봉 후 사용기간: 별도 표기</li>
                        <li>· 사용방법: - 향수 사용 시 최소 한 뼘 정도 거리를 두고 분사해 주세요.</li>
                        <li>- 향의 종류에 따라 발향력 및 지속력이 다르게 느껴질 수 있습니다. (최대 5~6시간 지속)</li>
                        <li>- 최초 사용 시 펌프를 깊게 눌러 분사해 주세요. (펌프 안에 용액이 고여 누수 현상이 발생할 수 있음)</li>
                        <li>· 화장품제조업자 / 화장품책임판매업자: E 코스메틱 / (유)이엘이 · 제조국: 대한민국</li>
                    </ul>
                </li>
                <li><span>주의사항</span>
                    <ul>
                        <li></li>
                    </ul>
                </li>
                <li><span>배송 및 문의</span>
                    <ul>
                        <li></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default DetailBottom;