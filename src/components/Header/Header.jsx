// export default function Header() {
//   return (
//     <div className="header">
//       <div className="description">
//         Компонент "Шапка". Содержит название приложения.
//       </div>
//       <h1>Фильмотраф</h1>
//     </div>
//   );
// }

import './Header.css';

export default function Header() {
  return (
    <div className="page-header">
      <h1 className="page-title">Фильмы</h1>
    </div>
  );
}