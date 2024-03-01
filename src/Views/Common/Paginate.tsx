import React, { useContext, useEffect, useState } from 'react';
import Context from '../../store/context';

type Props = {
    total: number;
    size: number;
    active: number;
    setActive: (val: number) => void;
};

function Paginate({ total, size, active, setActive }: Props) {
    const { state } = useContext(Context);
    const [stepper, setStepper] = useState<number[]>([]);

    useEffect(() => {
        const count = Math.ceil(total / size);
        const arr: number[] = [];
        
        for (let x = 1; x <= count; x++) {
            arr.push(x);
        }
        
        setStepper(arr);
    }, [total, size]);

    if (total > size) {
        return (
            <div className="h-fit w-[400px] flex">
                <button onClick={() => setActive(active > 1 ? active - 1 : 1)} className="w-[40px] h-[40px] rounded-lg flex justify-center items-center bg-gray-200 mr-2">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.45629 14.825L1.13754 8.52499C1.06254 8.44999 1.00929 8.36874 0.977786 8.28124C0.946286 8.19374 0.930786 8.09999 0.931286 7.99999C0.931286 7.89999 0.947036 7.80624 0.978536 7.71874C1.01004 7.63124 1.06304 7.54999 1.13754 7.47499L7.45629 1.15624C7.63129 0.981238 7.85004 0.893738 8.11254 0.893738C8.37504 0.893738 8.60004 0.987488 8.78754 1.17499C8.97504 1.36249 9.06879 1.58124 9.06879 1.83124C9.06879 2.08124 8.97504 2.29999 8.78754 2.48749L3.27504 7.99999L8.78754 13.5125C8.96254 13.6875 9.05004 13.9032 9.05004 14.1597C9.05004 14.4162 8.95629 14.638 8.76879 14.825C8.58129 15.0125 8.36254 15.1062 8.11254 15.1062C7.86254 15.1062 7.64379 15.0125 7.45629 14.825Z" fill="black"/>
                    </svg>
                </button>

                {stepper.map((val, idx, arr) => {
                    if (val === active || (val <= active + 2 && val > active)) {
                        return (
                            <button
                                key={`page-${val}`}
                                onClick={() => setActive(val)}
                                style={{
                                    background: `${val === active ? state.theme?.[0] : 'lightgray'}`,
                                    color: `${val === active && 'white'}`
                                }}
                                className={`w-[40px] h-[40px] rounded-lg flex justify-center items-center mr-2 text-sm`}
                            >
                                {val}
                            </button>
                        );
                    } else if (val === active + 3 && active + 3 < arr.length) {
                        return (
                            <aside
                                key={`page-${val}`}
                                className="w-[40px] h-[40px] rounded-lg flex justify-center items-end font-bold text-4xl mr-2"
                            >
                                ...
                            </aside>
                        );
                    } else if (idx === arr.length - 1) {
                        return (
                            <button
                                key={`page-${val}`}
                                onClick={() => setActive(active < arr.length ? active + 1 : arr.length)}
                                className="w-[40px] h-[40px] rounded-lg flex justify-center items-center bg-gray-200 mr-2 text-sm"
                            >
                                {val}
                            </button>
                        );
                    } else {
                        return <></>;
                    }
                })}

                <button onClick={() => setActive(active < stepper.length ? active + 1 : stepper.length)} className="w-[40px] h-[40px] rounded-lg flex justify-center items-center bg-gray-200 mr-2">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.54371 14.825L8.86246 8.52499C8.93746 8.44999 8.99071 8.36874 9.02221 8.28124C9.05371 8.19374 9.06921 8.09999 9.06871 7.99999C9.06871 7.89999 9.05296 7.80624 9.02146 7.71874C8.98996 7.63124 8.93696 7.54999 8.86246 7.47499L2.54371 1.15624C2.36871 0.981238 2.14996 0.893738 1.88746 0.893738C1.62496 0.893738 1.39996 0.987488 1.21246 1.17499C1.02496 1.36249 0.931213 1.58124 0.931213 1.83124C0.931213 2.08124 1.02496 2.29999 1.21246 2.48749L6.72496 7.99999L1.21246 13.5125C1.03746 13.6875 0.949963 13.9032 0.949963 14.1597C0.949963 14.4162 1.04371 14.638 1.23121 14.825C1.41871 15.0125 1.63746 15.1062 1.88746 15.1062C2.13746 15.1062 2.35621 15.0125 2.54371 14.825Z" fill="black"/>
                    </svg>
                </button>
            </div>
        );
    }
    return <></>;
}

export default Paginate;
