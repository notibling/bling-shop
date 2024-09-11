interface IToast {
  id: number;
  duration?: number;
  message: string | React.ReactElement;
  type: 'success' | 'error' | 'warning' | 'info';
}


type SimpleTrigger = (message: string, duration?: number) => Promise<number>;

interface IToastsContext {
  toasts: IToast[];
  /**
   * Add a new toast to the toast stack.
   *
   * @param {Omit<IToast, 'id'>} toast - The toast to be added.
   * @return {Promise<number>} A promise that resolves with the `ID` of the added toast. This ID can be used to remove the toast later on using the `hide` method.
   */

  show(toast: Omit<IToast, 'id'>): Promise<number>;

  /**
   * Remove a specific toast.
   */
  hide(id: number): void;

  /**
   * Remove all toasts
   */
  clear(): void;

  /**
   * Remove all toasts
   * @param message - the text that will be shown
   * @param duration - optional (can be there forever) in miliseconds
   */
  success: SimpleTrigger;
  error: SimpleTrigger;
  warning: SimpleTrigger;
  info: SimpleTrigger;
}




export { type IToastsContext, type IToast }