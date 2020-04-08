import fetch from '@/config/fetch'

/**
 * 登陆
 */

export const login = data => fetch('/admin/login', data, 'POST');

/**
 * 用户注册量
 */

export const userCount = date => fetch('/statis/user/' + date + '/count');

export const signout = date => fetch('/statis/user/' + date + '/count');
export const getUserCity = date => fetch('/statis/user/' + date + '/count');
export const adminDayCount = date => fetch('/statis/user/' + date + '/count');
export const getOrderCount = date => fetch('/statis/user/' + date + '/count');


/**
 * 某一天订单数量
 */

export const orderCount = date => fetch('/statis/order/' + date + '/count');


/**
 * 管理员列表
 */

export const adminList = data => fetch('/admin/all', data);

/**
 * 管理员数量
 */

export const adminCount = () => fetch('/admin/count');

/**
 * 添加商铺
 */

export const addShop = data => fetch('/shopping/addShop', data, 'POST');

/**
 * 添加食品
 */

export const addFood = data => fetch('/shopping/addfood', data, 'POST');


/**
 * category 种类列表
 */

/**
 * 获取用户列表
 */

export const getUserList = data => fetch('/v1/users/dqlist', data);

/**
 * 获取用户数量
 */

export const getUserCount = data => fetch('/v1/users/count', data);
