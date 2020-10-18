function SummaryView(props){
    const div =document.createElement("div");
    div.setAttribute("title","summary");
    div.append("Dinner for");
    const span = document.createElement("span");
    span.setAttribute("title", "nr. guests")
    span.append(2)
    div.append(span);
    div.append("guests");
    return div;
}