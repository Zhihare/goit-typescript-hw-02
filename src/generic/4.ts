/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentValueProps<T> {
  title: T;
};
class Component<T> {
  constructor(public props: T) {

  }
}
interface PageProps<T> extends ComponentValueProps<T> {
  title: T;
}
class Page<T> extends Component<ComponentValueProps<T>> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { };