import path from 'path';
import Koa from 'koa';
import mount from 'koa-mount';
import serve from 'koa-static';
import views from 'koa-views';

const cwd = process.cwd();
const app = new Koa();
const listenPort = 3000;

app.use(mount('/dist', serve(path.join(cwd, 'dist'))));

app.use(views(path.join(cwd, 'src/server/views'), {extension: 'ejs'}));

app.use(mount('/', async ctx => await ctx.render('demo')));

app.listen(listenPort, () => console.log('node server is listening on port: ' + listenPort));