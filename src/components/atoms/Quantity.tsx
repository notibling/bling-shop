'use client';
import React, { Component, ChangeEvent } from 'react';
import { Button, Input } from '@/components/atoms';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface QuantityProps {
  initialQuantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  step?: number;
  onChange: (quantity: number) => void;
}

interface QuantityState {
  quantity: number;
}


class Quantity extends Component<QuantityProps, QuantityState> {
  static defaultProps = {
    initialQuantity: 1
  };

  constructor(props: QuantityProps) {
    super(props);
    this.state = {
      quantity: props.initialQuantity ?? 1
    };
  }

  decrementQuantity = () => {
    this.setState((prevState) => ({
      quantity: Math.max(1, prevState.quantity - 1)
    }), () => {
      this.props.onChange(this.state.quantity);
    });
  };

  incrementQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1
    }), () => { 
      this.props.onChange(this.state.quantity);
    });
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    const newQuantity = isNaN(value) ? 1 : Math.max(1, value);

    this.setState({
      quantity: newQuantity
    }, () => {
      this.props.onChange(this.state.quantity);
    });
  };

  componentDidUpdate(prevProps: Readonly<QuantityProps>) {
    if (prevProps.initialQuantity !== this.props.initialQuantity) {
      this.setState({ quantity: this.props.initialQuantity ?? 1 });
    }
  }

  render() {
    return (
      <div className='flex flex-row items-center justify-center gap-1 flex-nowrap'>
        <div className='w-[30px] h-[30px] '>
          <Button icon={<FaMinus />} onClick={this.decrementQuantity} className='w-[30px] bling-btn-primary dark:bling-btn-primary-dark h-[30px] rounded-full ' />
        </div>
        <div className='w-[40px] h-[35px] '>
          <Input type='number' value={this.state.quantity} onChange={this.handleChange} className='w-full h-[35px] no-spinner text-sm overflow-hidden !outline-none flex flex-row !px-0 !text-center rounded-md' />
        </div>
        <div className='w-[30px] h-[30px] '>
          <Button icon={<FaPlus />} onClick={this.incrementQuantity} className='w-[30px] h-[30px] bling-btn-primary dark:bling-btn-primary-dark rounded-full ' />
        </div>
      </div>
    );
  }
}

export { Quantity };
