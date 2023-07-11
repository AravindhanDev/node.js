module.exports = {
    fromNow: function (date1) {
        let date2 = new Date()
        var timeDiff = Math.abs(date1.getTime() - date2.getTime())
        if (timeDiff < 1) return 0
        var oneDay = 24 * 60 * 60 * 1000
        var daysDiff = Math.ceil(timeDiff / oneDay)
        return daysDiff
    },
    fromTo: function (date1, date2) {
        var timeDiff = Math.abs(date1.getTime() - date2.getTime())
        if (timeDiff < 1) return 0
        var oneDay = 24 * 60 * 60 * 1000
        var daysDiff = Math.ceil(timeDiff / oneDay)
        return daysDiff
    },
}
