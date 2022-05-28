export function FormCmp({
    cmp,
    onHoverElement,
    selectedElement,
    onSelectElement,
  }) {
      console.log(cmp);
    return <form style={cmp.style}
    className={`${selectedElement?.id === cmp.id ? 'selected' : ''} ${
      cmp.name
    }`}
    onMouseOut={(ev) => ev.target.classList.remove('hover')}
    onMouseOver={(ev) => onHoverElement(ev)}
    onClick={(ev) => onSelectElement(ev, cmp)}>
        {cmp.info.formFields.map(field => {
            if (field.type === 'textarea') return <textarea rows={field.rows} placeholder={field.placeholder}></textarea>

            return <input type={field.input} placeholder={field.placeholder}></input>
        })}
    </form>
}