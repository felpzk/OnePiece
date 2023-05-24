interface TemplateProps {
  children: any
  className?: string
  id?: string
}

export default function Template(props: TemplateProps) {
  return (
      <div id={props.id ?? ''} className={`
          flex justify-center w-full
          ${props.className ?? ''}
      `}>
          <div className={`
              px-7 xl:px-0 
              w-full xl:w-[1500px]
          `}>
              {props.children}
          </div>
      </div>
  )
}