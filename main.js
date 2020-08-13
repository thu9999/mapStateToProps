/**
 * mapStateToProps
 * Component trong reactjs là 1 object.
 * Áp dụng design pattern: Composition trong javascript 
 * ( Các design pattern tương tự DI - Dependancy Inverson hoặc IoC - Conversion Of Control)
 * Giả sử có 2 object ComponentA và ComponentB
 * Cả 2 object này đều có chung một method getDetail() hoặc state trong state management
 * Có thể xử lý bằng inheritance trong js nhưng inheritance sẽ có một số nhược điểm như không linh hoạt và 
 * trong một số trường hợp là bất khả thi (Sẽ nói rõ nếu có bài về inheritance trong js)
 */

/**
 * 
 * Định nghĩa các methods/state riêng rẽ ( trong redux )
 * Output của mapStateToProps là 1 object chứa method getDetail() và color state
 * Example
 * {
 *  getDetail(): Function
 *  color: String
 * }
 */
const mapStateToProps = (state) => ({
    getDetail: () => console.log(state.id),
    color: 'Color State'
})

// 2. Inject getDetail() method và các state khác nếu có
const ComponentA = (props) => ({
    ...props,
    ...mapStateToProps({ id: props.id })
});

const a = ComponentA({
    name: 'A', 
    id: 1
});

// Tương tự với componentB
const ComponentB = (props) => ({
    ...props,
    ...mapStateToProps({ id: props.id })
});

const b = ComponentB({
    id: 2,
    componentDidMount: () => console.log('Component B did mount')
});

b.getDetail();
b.componentDidMount();
console.log(a.color === b.color); //true