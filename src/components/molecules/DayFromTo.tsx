'use client';
import React, { Component } from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface DayFromToProps {
    day: string;
    from: string;
    to: string;
    className?: string;
    closed?: boolean;
}

class DayFromTo extends Component<DayFromToProps> {
    static defaultProps = {
        className: '',
        closed: false,
    };

    // Método para determinar si es AM o PM
    getPeriod(time: string): string {
        if (typeof time !== 'string' || !time.includes(':')) {
            return '';
        }
        const [hours, minutes] = time.split(':').map(Number);
        if (isNaN(hours) || isNaN(minutes)) {
            return '';
        }
        return hours < 12 ? 'AM' : 'PM';
    }
    

    render() {
        const { day, from, to, className, closed } = this.props;
        
        const fromPeriod = this.getPeriod(from);
        const toPeriod = this.getPeriod(to);

        return (
            <>
           <div className={`${className} text-slate-700 gap-1 flex flex-row flex-nowrap py-[2px] text-xs justify-between w-full items-center`}>
             <span className="text-nowrap font-bold">{day}</span>
             {closed ? (
                <span className="text-nowrap">Cerrado</span>
             ) : (
                <span className="flex flex-row flex-nowrap justify-center items-center text-nowrap">
                    {from} {fromPeriod} <FaChevronRight className="text-[8px] mx-1"/> {to} {toPeriod}
                </span>
             )}
           </div>
           </>
        );
    }
}

export { DayFromTo };
