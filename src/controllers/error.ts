const get404 = (req:any, res:any, next:any) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};

export {
  get404
}
