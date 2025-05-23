/* eslint-disable @typescript-eslint/no-explicit-any */
const logger = () => (next: any) => (action: any) => {
    // console.group(action.type);
    // console.info('dispatching', action);
    const result: any = next(action);
    // console.log('next state', store.getState());
    // console.groupEnd();
    return result;
};

export default logger;