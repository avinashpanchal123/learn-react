import { useTheme } from "../themeContext/ThemeContext"


export default function Button() {
    const {theme, changeTheme} = useTheme()
    return <>
        <div>
            <input type="checkbox" id="subscribeNews" name="theme" value="newsletter" />
            <label for="subscribeNews">Subscribe to newsletter?</label>
        </div>
    </>

}
