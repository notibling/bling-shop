import classNames from 'classnames';
import { Dropdown } from '@/components/organisms/Dropdown';
import { FaShoppingBasket } from 'react-icons/fa';
import { useCart } from '@/contexts/Cart';
import { DropdownItem } from '../Dropdown/DropdownItem';
import { CardHorizontal, CartVariantQuantity } from '@/components/molecules';
import { Item } from '@/components/atoms';
import { FaBasketShopping } from 'react-icons/fa6';


interface ICartCTAProps {

}

const CartCTA: React.FC<ICartCTAProps> = () => {
  const { cartItems, cartItemsCount, changeProductQuantity } = useCart();

  return (
    <>
      <Dropdown
        bodyClassName='w-auto h-auto overflow-visible'
        position='bottom'
        trigger={
          <div
            className={classNames(
              'w-auto',
              'h-12',
              'rounded-md',
              'hover:shadow-md',
              'hover:text-blue-500',
              'dark:hover:text-blue-500',
              'transition-all',
              'cursor-pointer',
              'flex',
              'justify-center',
              'px-3',
              'relative',
              'items-center',
              'dark:hover:bg-slate-800',
              'text-lg',
              'text-slate-700',
              'dark:text-slate-600',
              'gap-2'
            )}
          >
            <div className={classNames('w-auto', 'h-auto', 'flex', 'mr-2')}>
              {cartItemsCount > 0 && (
                <div className={classNames('w-[16px]', 'h-[16px]', 'items-center', 'text-center', 'absolute', 'left-[28px]', 'justify-center', 'flex', 'text-[8px]', 'bg-blue-500', 'font-bold', 'rounded-full', 'top-[5px]', 'text-white')}>
                  {cartItemsCount}
                </div>
              )}
              <FaShoppingBasket className={classNames('text-xl', 'flex')} />
            </div>
            <p className={classNames('self-center', 'text-[15px]', 'font-bold', 'items-center', 'flex', 'flex-nowrap', 'gap-1', 'align-middle')}>
              <span className={classNames('text-[12px]', 'font-black')}>UY</span> <span>$</span>
              <span>0.00</span>
            </p>
          </div>
        }

      >
        {cartItems.length > 0 ? (
          <DropdownItem className={classNames('w-[400px] h-auto flex flex-col !gap-1 dark:bg-slate-900 p-2 bg-slate-100 shadow-md rounded-md')}>
            {cartItems.slice(0, 3).map((item) => (
              <CardHorizontal
                key={item.id}
                footer={<>
                  {
                    <div className={classNames('flex', 'flex-col', 'w-full', 'gap-2')}>
                      {
                        (item.details.variants ?? []).map((variant) => (
                          <CartVariantQuantity
                            key={variant.id}
                            text={variant.title}
                            quantity={variant.quantity}
                            onChange={(quantity) => {
                              changeProductQuantity({ item, variant, quantity });
                            }}
                          />
                        ))
                      }
                    </div>
                  }
                </>}
                className='flex-grow-0'
                title={item.title}
                imageClassName='!h-[80px]'
                price={item.price}
                badge='UY $'
                actions={true}
                deleteButton={true}
                quantity={false}
                image={item.image}
                imageAlt='product'
                shareButton={true}
              />
            ))}
            {cartItems.length > 3 && <Item content='icon' contentClassName='flex flex-row dark:bg-slate-800  rounded-md !justify-center !items-center' icon={<FaBasketShopping />} text='Ver Carrito Completo' onClick={() => { }} />}
          </DropdownItem>
        ) : null}
      </Dropdown>

    </>
  );
};

export { CartCTA };