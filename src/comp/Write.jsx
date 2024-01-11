import React from 'react';

function Write({ insert }) {

    function submit(e) {
        e.preventDefault();
        let d = { id: Date.now(), todo: e.target.txt.value, state: false }
        insert(d)

        e.target.txt.value = '';
    }

    return (
        <div className='write'>
            <form onSubmit={submit}>
                <input type="text" name="txt" />
                <input type="submit" value="저장" />
            </form>
        </div>
    );
}

export default Write;