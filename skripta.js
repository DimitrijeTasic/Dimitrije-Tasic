function checkboks(checkbox){
    targetClass = checkbox.getAttribute('data-target-class')
    console.log(targetClass)
    if (checkbox.checked == true){
        $(targetClass).show()
    }
    else
        $(targetClass).hide()
}
function renderpredmet(u)
{
    $card = $(`<div class='card col ${u["tekst"]}'></div>`)
    $cardBody = $("<div class='card-body d-flex flex-column align-items-center gap-3'></div>")
    $card.append($cardBody)
    $cardBody.text(u['status'] + " " + u['prezime'])
    return $card
}
function renderListu(target, data)
{
    data.map(u => $(target).append(renderpredmet(u)))
}
