'use strict';

const lessonFigures = {
  'prob-02.1': {
    caption: 'در ۳ یک نتیجهٔ دیگر حساب می‌شود. نقطهٔ پُر مقدار تابع در خودِ ۳ است.',
    alt: 'تابع توزیع تجمعی تاس شش‌وجهی در هر عدد صحیح یک‌ششم بالا می‌پرد. در x برابر ۳، نقطهٔ پُر در ارتفاع یک‌دوم است.',
    bounds: [0, 7, -0.05, 1.17], axes: ['x', 'F(x)'],
    xTicks: [1, 2, 3, 4, 5, 6], yTicks: [[0.5, '1/2'], [1, '1']],
    paths: [
      {points: [[0, 0.5], [3, 0.5], [3, 0]], kind: 'guide'},
      ...Array.from({length: 7}, (_, k) => ({points: [[k, k / 6], [k + 1, k / 6]]})),
    ],
    dots: [
      ...Array.from({length: 6}, (_, k) => ({point: [k + 1, k / 6], hollow: true})),
      ...Array.from({length: 6}, (_, k) => ({point: [k + 1, (k + 1) / 6]})),
    ],
  },
  'prob-03.2': {
    caption: 'مساحت رنگی از ۰٫۵ تا ۱٫۵ برابر عرض ۱ در ارتفاع ۱/۲ است.',
    alt: 'چگالی یکنواخت روی بازهٔ صفر تا دو، در ارتفاع یک‌دوم. مستطیل میان نیم و یک‌ونیم رنگ شده است.',
    bounds: [-0.18, 2.3, -0.03, 0.7], axes: ['x', 'f(x)'],
    xTicks: [0.5, 1.5, 2], yTicks: [[0.5, '1/2']],
    paths: [
      {points: [[0.5, 0], [0.5, 0.5], [1.5, 0.5], [1.5, 0]], kind: 'area'},
      {points: [[0, 0], [0, 0.5]], kind: 'guide'},
      {points: [[2, 0], [2, 0.5]], kind: 'guide'},
      {points: [[0, 0.5], [2, 0.5]]},
    ],
  },
  'prob-07.3': {
    caption: 'دقیقاً نیمی از مربع واحد زیر خط \\(x+y=1\\) است.',
    alt: 'مربع واحد با خطی از نقطهٔ صفر و یک تا یک و صفر به دو مثلث تقسیم شده است. مثلث شامل مبدأ رنگی است.',
    bounds: [-0.18, 1.22, -0.15, 1.2], axes: ['x', 'y'], equalScale: true,
    xTicks: [1], yTicks: [1],
    paths: [
      {points: [[0, 0], [1, 0], [0, 1]], kind: 'area'},
      {points: [[0, 1], [1, 1], [1, 0]], kind: 'guide'},
      {points: [[0, 1], [1, 0]]},
    ],
    labels: [{point: [0.48, 0.52], text: 'x + y = 1', dx: 8, dy: -8}],
  },
  'prob-10.1': {
    caption: 'هر دو نقطه در حالت هم‌علامت‌اند. هر نقطه یا از هر دو میانگین پایین‌تر است یا از هر دو بالاتر.',
    alt: 'دو نقطهٔ یک و دو، و سه و شش در دو طرف مرکز دو و چهار هستند. خط‌چین‌ها دو محور مرکز‌شده را نشان می‌دهند.',
    bounds: [0, 4.2, 0, 7], axes: ['X', 'Y'],
    xTicks: [1, 2, 3], yTicks: [2, 4, 6],
    paths: [
      {points: [[2, 0], [2, 6.8]], kind: 'guide'},
      {points: [[0, 4], [4.1, 4]], kind: 'guide'},
    ],
    dots: [{point: [1, 2]}, {point: [3, 6]}, {point: [2, 4], hollow: true, color: 'secondary'}],
    labels: [{point: [2, 4], text: 'μ', dx: 8, dy: -9}],
  },
  'prob-13.3': {
    caption: 'مربع اولیه ۱ واحد مساحت دارد. مستطیلِ خروجی با اضلاع ۲ و ۳، ۶ واحد.',
    alt: 'مربع واحد در گوشهٔ پایین چپ مستطیل دو در سه رسم شده است. مستطیل خروجی شش برابر مربع مساحت دارد.',
    bounds: [-0.25, 2.45, -0.25, 3.35], axes: ['x₁ / y₁', 'x₂ / y₂'], equalScale: true,
    xTicks: [1, 2], yTicks: [1, 3],
    paths: [
      {points: [[0, 0], [2, 0], [2, 3], [0, 3]], kind: 'area'},
      {points: [[0, 0], [1, 0], [1, 1], [0, 1]], kind: 'area', color: 'secondary'},
    ],
    labels: [{point: [0.5, 0.5], text: 'X', align: 'center'}, {point: [1.5, 2], text: 'Y', align: 'center'}],
  },
  'prob-14.1': {
    caption: 'روی بیضی، مقدار \\(x_1^2/4+x_2^2\\) برابر ۱ است. نقطهٔ \\((1,0)\\) داخل این تراز قرار دارد.',
    alt: 'بیضی تراز نرمال با نیم‌محور افقی ۲ و عمودی ۱. نقطهٔ یک و صفر داخل بیضی و صفر و یک روی مرز است.',
    bounds: [-2.45, 2.45, -1.35, 1.35], axes: ['x₁', 'x₂'], equalScale: true,
    xTicks: [-2, 1, 2], yTicks: [-1, 1],
    paths: [{
      kind: 'area',
      points: Array.from({length: 65}, (_, i) => {
        const theta = i * Math.PI / 32;
        return [2 * Math.cos(theta), Math.sin(theta)];
      }),
    }],
    dots: [{point: [1, 0], color: 'secondary'}, {point: [0, 1], color: 'secondary'}],
  },
  'prob-16.2': {
    caption: 'در مسیر شیر، خط، خط، نسبت ابتدا به ۱/۲ می‌رسد و سپس دوباره از آن دور می‌شود.',
    alt: 'نسبت شیر در سه گام به ترتیب ۱، یک‌دوم و یک‌سوم است. خط‌چین افقی در یک‌دوم قرار دارد.',
    bounds: [0, 3.55, 0, 1.18], axes: ['n', 'X̄ₙ'],
    xTicks: [1, 2, 3], yTicks: [[1 / 3, '1/3'], [1 / 2, '1/2'], [1, '1']],
    paths: [
      {points: [[0, 0.5], [3.55, 0.5]], kind: 'guide'},
      {points: [[1, 1], [2, 0.5], [3, 1 / 3]]},
    ],
    dots: [{point: [1, 1]}, {point: [2, 0.5]}, {point: [3, 1 / 3]}],
  },
  'prob-19.2': {
    caption: 'خط‌چین مقدار واقعی ۵۰ است. بازهٔ اول از آن می‌گذرد و بازهٔ دوم بالاتر از آن شروع می‌شود.',
    alt: 'دو فاصلهٔ اطمینان از ۴۸ تا ۵۲ و ۵۱ تا ۵۵ رسم شده‌اند. تنها بازهٔ اول مقدار ۵۰ را می‌پوشاند.',
    bounds: [47, 56, -0.05, 2.6], axes: ['μ', ''],
    xTicks: [48, 50, 52, 55],
    paths: [
      {points: [[50, 0], [50, 2.45]], kind: 'guide'},
      {points: [[48, 2], [52, 2]]},
      {points: [[51, 1], [55, 1]], color: 'secondary'},
    ],
    dots: [
      {point: [48, 2]}, {point: [52, 2]},
      {point: [51, 1], color: 'secondary'}, {point: [55, 1], color: 'secondary'},
    ],
  },
  'linear-01.1': {
    caption: 'نقطهٔ \\((1,2)\\) محل تقاطع دو خط است و هر دو معادله را هم‌زمان برقرار می‌کند.',
    alt: 'خط x₁+x₂=3 و خط x₂=2x₁ در نقطهٔ یک و دو همدیگر را قطع می‌کنند.',
    bounds: [-0.25, 3.35, -0.25, 3.65], axes: ['x₁', 'x₂'], equalScale: true,
    xTicks: [1, 2, 3], yTicks: [1, 2, 3],
    paths: [
      {points: [[0, 3], [3, 0]]},
      {points: [[0, 0], [1.65, 3.3]], color: 'secondary'},
    ],
    dots: [{point: [1, 2]}],
    labels: [{point: [1, 2], text: '(1, 2)', dx: 9, dy: -8}],
  },
  'linear-03.1': {
    caption: 'مربع واحد و تصویرش روی یک دستگاه مختصات. تصویر قاعدهٔ ۲ و ارتفاع ۱ دارد.',
    alt: 'مربع واحد رنگ ثانویه دارد. متوازی‌الاضلاع تبدیل‌شده رأس‌های صفر و صفر، دو و صفر، سه و یک، یک و یک را دارد.',
    bounds: [-0.3, 3.45, -0.32, 1.5], axes: ['x₁', 'x₂'], equalScale: true,
    xTicks: [1, 2, 3], yTicks: [1],
    paths: [
      {points: [[0, 0], [1, 0], [1, 1], [0, 1]], kind: 'area', color: 'secondary'},
      {points: [[0, 0], [2, 0], [3, 1], [1, 1]], kind: 'area'},
    ],
    dots: [{point: [2, 0]}, {point: [3, 1]}],
  },
  'linear-04.1': {
    caption: 'خط \\(y=2x\\) از مبدأ می‌گذرد. خط \\(y=2x+1\\) موازیِ آن و یک واحد بالاتر است.',
    alt: 'دو خط موازی با شیب ۲ رسم شده‌اند. یکی محور عمودی را در صفر و دیگری در یک قطع می‌کند.',
    bounds: [-1.25, 1.35, -2.1, 3.35], axes: ['x', 'y'], equalScale: true,
    xTicks: [-1, 1], yTicks: [1, 2, 3],
    paths: [
      {points: [[-1, -2], [1, 2]]},
      {points: [[-1, -1], [1, 3]], color: 'secondary'},
    ],
    dots: [{point: [0, 0]}, {point: [0, 1], color: 'secondary'}],
  },
  'linear-09.1': {
    caption: 'پاره‌خطِ خط‌چین \\(b-p\\) بر امتداد \\(a\\) عمود است. \\(p\\) روی خودِ خط قرار دارد.',
    alt: 'بردار b به نقطهٔ سه و یک می‌رسد. پای عمود p در دو و دو است. پاره‌خط b تا p با خط y=x زاویهٔ قائم می‌سازد.',
    bounds: [-0.3, 3.9, -0.32, 3.55], axes: ['x₁', 'x₂'], equalScale: true,
    xTicks: [1, 2, 3], yTicks: [1, 2, 3],
    paths: [
      {points: [[0, 0], [3.35, 3.35]]},
      {points: [[0, 0], [3, 1]], kind: 'arrow', color: 'secondary'},
      {points: [[2, 2], [3, 1]], kind: 'guide'},
      {points: [[1.82, 1.82], [2, 1.64], [2.18, 1.82]], color: 'secondary'},
    ],
    dots: [{point: [2, 2]}, {point: [3, 1], color: 'secondary'}],
    labels: [
      {point: [2, 2], text: 'p', dx: -15, dy: -7},
      {point: [3, 1], text: 'b', dx: 10, dy: -7},
    ],
  },
  'linear-14.2': {
    caption: 'سه مشاهده روی جهت \\(v_1\\) قرار دارند. در امتداد جهت عمود \\(v_2\\)، تصویر هر سه در مبدأ می‌افتد.',
    alt: 'سه نقطهٔ منفی یک و منفی یک، صفر و صفر، و یک و یک روی قطر صعودی‌اند. قطر نزولیِ عمود خط‌چین است.',
    bounds: [-1.75, 1.75, -1.6, 1.6], axes: ['x₁', 'x₂'], equalScale: true,
    xTicks: [-1, 1], yTicks: [-1, 1],
    paths: [
      {points: [[-1.4, -1.4], [1.4, 1.4]], kind: 'arrow'},
      {points: [[-1.35, 1.35], [1.35, -1.35]], kind: 'guide'},
    ],
    dots: [{point: [-1, -1]}, {point: [0, 0]}, {point: [1, 1]}],
    labels: [
      {point: [1.4, 1.4], text: 'v₁', dx: 9, dy: 0},
      {point: [1.35, -1.35], text: 'v₂', dx: 9, dy: 1},
    ],
  },
};

function drawLessonFigure(canvas) {
  const figure = lessonFigures[canvas.dataset.lessonFigure];
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!figure || !width || !height) return;

  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.scale(scale, scale);
  ctx.direction = 'ltr';

  const style = getComputedStyle(canvas);
  const colors = {
    primary: style.getPropertyValue('--accent').trim(),
    secondary: style.getPropertyValue('--figure-secondary').trim(),
    guide: style.getPropertyValue('--sub').trim(),
    text: style.getPropertyValue('--text').trim(),
    background: style.getPropertyValue('--surface2').trim(),
  };
  const [minX, maxX, minY, maxY] = figure.bounds;
  let unitX = (width - 66) / (maxX - minX);
  let unitY = (height - 52) / (maxY - minY);
  if (figure.equalScale) unitX = unitY = Math.min(unitX, unitY);
  const left = (width - (maxX - minX) * unitX) / 2;
  const bottom = (height + (maxY - minY) * unitY) / 2;
  const x = value => left + (value - minX) * unitX;
  const y = value => bottom - (value - minY) * unitY;

  function path(points, color, kind) {
    ctx.beginPath();
    points.forEach(([px, py], i) => (i ? ctx.lineTo(x(px), y(py)) : ctx.moveTo(x(px), y(py))));
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = kind === 'axis' || kind === 'guide' ? 1.2 : 2;
    ctx.setLineDash(kind === 'guide' ? [5, 4] : []);
    if (kind === 'area') {
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.16;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.stroke();
    if (kind === 'arrow') {
      const [previous, end] = points.slice(-2);
      const tipX = x(end[0]);
      const tipY = y(end[1]);
      const angle = Math.atan2(tipY - y(previous[1]), tipX - x(previous[0]));
      ctx.beginPath();
      ctx.moveTo(tipX - 8 * Math.cos(angle - 0.45), tipY - 8 * Math.sin(angle - 0.45));
      ctx.lineTo(tipX, tipY);
      ctx.lineTo(tipX - 8 * Math.cos(angle + 0.45), tipY - 8 * Math.sin(angle + 0.45));
      ctx.stroke();
    }
  }

  for (const {points, kind, color = kind === 'guide' ? 'guide' : 'primary'} of figure.paths) {
    path(points, colors[color], kind);
  }
  path([[minX, 0], [maxX, 0]], colors.guide, 'axis');
  if (figure.axes[1]) path([[0, minY], [0, maxY]], colors.guide, 'axis');

  ctx.font = '13px "Vazirmatn", sans-serif';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = colors.text;
  for (const tick of figure.xTicks ?? []) {
    const [value, label] = Array.isArray(tick) ? tick : [tick, String(tick)];
    ctx.textAlign = 'center';
    ctx.fillText(label, x(value), y(0) + 15);
  }
  for (const tick of figure.yTicks ?? []) {
    const [value, label] = Array.isArray(tick) ? tick : [tick, String(tick)];
    ctx.textAlign = 'right';
    ctx.fillText(label, x(0) - 7, y(value));
  }
  ctx.textAlign = 'left';
  ctx.fillText(figure.axes[0], Math.min(x(maxX) + 4, width - 35), y(0) - 10);
  if (figure.axes[1]) ctx.fillText(figure.axes[1], x(0) + 5, y(maxY) - 8);

  for (const {point: [px, py], hollow, color = 'primary'} of figure.dots ?? []) {
    ctx.beginPath();
    ctx.arc(x(px), y(py), 4, 0, Math.PI * 2);
    ctx.fillStyle = hollow ? colors.background : colors[color];
    ctx.fill();
    ctx.strokeStyle = colors[color];
    ctx.stroke();
  }
  ctx.fillStyle = colors.text;
  for (const {point: [px, py], text, dx = 0, dy = 0, align = 'left'} of figure.labels ?? []) {
    ctx.textAlign = align;
    ctx.fillText(text, x(px) + dx, y(py) + dy);
  }
}
