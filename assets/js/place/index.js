function formatMoney(price) {
    var raw = "R$" + price.toFixed(2);
    return raw.replace(".", ",");
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function main() {
    listItems(Number(getUrlParam('id')), function(result) {
        if (result.error === "no such place") {
            alert("Local não encontrado!");
            return;
        }

        // drawing place
        var divItems = document.getElementById('items');
        var table = "<table class='striped'>" +
                    "  <caption>O que temos para hoje</caption>" +
                    "  <thead>" +
                    "    <tr>" +
                    "      <th>" +
                    "        Nome" +
                    "      </th>" +
                    "      <th>" +
                    "        Preço" +
                    "      </th>" +
                    "    </tr>" +
                    "  </thead>" +
                    "  <tbody>";
        console.log(result);
        var items = result.items;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            table += "    <tr>" +
                     "      <td data-label='Nome'>" +
                     capitalize(item.name) +
                     "      </td>" +
                     "      <td  data-label='Preço'>" +
                     formatMoney(item.price) +
                     "      </td>" +
                     "    </tr>";
        }
        table += "  </tbody>" +
                 "</table>";
        divItems.innerHTML = table;
    });
}
