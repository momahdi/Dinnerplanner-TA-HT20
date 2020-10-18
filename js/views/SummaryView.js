function SummaryView(props){
   return h("div",{title:"summary"},"Dinner for ",h("span",{title:"nr.guests",},props.guests)," guests" );
}