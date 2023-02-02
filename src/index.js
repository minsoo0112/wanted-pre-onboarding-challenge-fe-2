/**
 * Todo 객체
 * @typedef {Object}Todo
 * @property {number} id - 아이디, required
 * @property {string} content - 내용, required
 * @property {boolean} iscompleted - 완료여부, required
 * @property {string} category - 카테고리, required
 * @property {string[]} tags - 태그들, optional
 */

/**
 * Todo 생성
 * @param {Todo} - 추가할 todo 객체 
 * @throws {Error} - content가 없을 때 에러 리턴
 */
function createTodo(todo) {}

/**
 * Todo 조회
 * @param {number="all"} id - 조회할 id값, 디폴트는 all
 * @returns {Todo[]} Todo 배열
 */
function getTodos(id) {}

/**
 * 특정 Todo의 데이터 수정
 * @param {Todo} - 수정된 todo 객체
 * @throws {Error} - id가 바뀌면 에러 리턴
 */
function updateTodo(todo) {}

/**
 * 모든 todo 삭제
 */
function deleteTodos() {}

/**
 * 특정 todo 삭제
 * @param {number} id - 삭제할 todo의 id
 */
function deleteTodo(id) {}

/**
 * 특정 todo의 모든 tag 삭제
 * @param {number} id - 삭제할 todo의 id
 */
function deleteAllTags(id) {}

/**
 * 특정 todo의 특정 tag 삭제
 * @param {number} id - 삭제할 todo의 id
 * @param {string} tag - 삭제할 tag의 값
 */
function deleteTag(id, tag) {}