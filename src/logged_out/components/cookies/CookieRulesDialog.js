import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  dialog: {
    zIndex: 1400
  },
  backIcon: {
    marginRight: theme.spacing(1)
  }
});

function CookieRulesDialog(props) {
  const { classes, onClose, open, theme } = props;
  return (
    <Dialog
      open={open}
      scroll="paper"
      onClose={onClose}
      className={classes.dialog}
    >
      <DialogTitle>מדיניות ה"עוגיות" שלנו</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          {/* What Are Cookies */}
          א. הקדמה
        </Typography>
        <Typography paragraph>
        1. הפרטיות של המבקרים באתר שלנו חשובה לנו מאוד, ואנחנו מחויבים לשמירה עליה. המדיניות הזו מסבירה מה נעשה עם הפרטים האישיים שלכם.
        <br/><br/>
2. ההסכמה לשימוש שלנו בעוגיות בהתאם לתנאים של מדיניות זו בזמן הביקור הראשון באתר שלנו, מאפשרת לנו להשתמש בעוגיות בכל פעם שאתם מבקרים באתר.
          {/* As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or
          &apos;break&apos; certain elements of the sites functionality. For
          more general information on cookies see the Wikipedia article on HTTP
          Cookies. */}
        </Typography>
        <Typography variant="h6" paragraph>
        ב. קרדיט
המסמך הזה נוצר בעזרת תבנית של SEQ Legal (seqlegal.com) ושונתה על ידי Website Planet (www.websiteplanet.com)
        </Typography>
        <Typography variant="h6" paragraph>
        ג. איסוף פרטים אישיים
          {/* How We Use Cookies */}
        </Typography>
        <Typography paragraph>
        יתכן שהסוגים הבאים של פרטים אישיים ייאספו, יאוחסנו, ויעשה בהם שימוש: <br/><br/>
        1. מידע על המחשב שלכם, כולל כתובת ה-IP שלכם, מיקומכם הגאוגרפי, סוג הדפדפן והגרסה שלו, ומערכת ההפעלה; <br/><br/>
        2. מידע על הביקורים והשימוש שלכם באתר, כולל מקור ההפניה, אורך הביקור, צפיות בעמודים, ונתיבי המעבר שלכם באתר; <br/><br/>
        3. מידע, כמו למשל כתובת הדואר האלקטרוני שלכם, שאתם מזינים בזמן ההרשמה לאתר שלנו; <br/><br/>
        4. מידע שאתם מזינים בזמן יצירת פרופיל באתר שלנו—לדוגמה, השם שלכם, תמונות פרופיל, מגדר, יום הולדת, מצב מערכות יחסים, תחומי עניין ותחביבים, פרטי השכלה, ופרטי תעסוקה; <br/><br/>
        5. מידע, כמו למשל השם וכתובת הדואר האלקטרוני שלכם, שאתם מזינים על מנת ליצור מנוי להודעות הדואר האלקטרוני ו/או הניוזלטר שלנו; <br/><br/>
        6. המידע שאתם מזינים בזמן השימוש בשירותים באתר שלנו; <br/><br/>
        7. מידע שנוצר בזמן השימוש באתר שלנו, כולל מתי, כמה, ובאילו נסיבות אתם משתמשים בו; <br/><br/>
        8. מידע שקשור לכל דבר שאתם רוכשים, שירותים בהם אתם משתמשים, או העברות שאתם מבצעים באתר שלנו, הכולל את השם שלכם, הכתובת, מספר הטלפון, כתובת הדואר האלקטרוני, ופרטי כרטיס האשראי שלכם; <br/><br/>
        9. מידע שאתם מפרסמים באתר שלנו בכוונה לפרסמו באינטרנט, שכולל את שם המשתמש שלכם, תמונות הפרופיל, ותוכן התגובות שלכם; <br/><br/>
        10. מידע שנכלל במסרים שאתם שולחים לנו בדואר האלקטרוני או באמצעות האתר שלנו, כולל תוכן המסר והמטא-דאתה שלו; <br/><br/>
        11. כל סוג אחר של פרטים אישיים שאתם שולחים אלינו. <br/><br/>
          {/* We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use. */}
        </Typography>
        <Typography variant="h6" paragraph>
        לפני שתחשפו בפנינו את הפרטים האישיים של אדם אחר, עליכם לבקש את הסכמת האדם הזה גם עבור השיתוף וגם עבור העיבוד של אותם הפרטים האישיים לפי מדיניות זו
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
        ד. שימוש בפרטים האישיים שלכם
        </Typography>
        <Typography paragraph>
          {/* You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies. */}
          בפרטים אישיים שנמסרו לנו דרך האתר שלנו ייעשה שימוש למטרות שצוינו במדיניות זו, או בעמודים הרלוונטיים שבאתר. ייתכן שנשתמש בפרטים האישיים שלכם למטרות הבאות: <br/><br/>

1.          ניהול האתר והעסק שלנו; <br/><br/>
2.          התאמה האישית של האתר עבורכם; <br/><br/>
  3.        לאפשר לכם להשתמש בשירותים הזמינים באתר שלנו; <br/><br/>
    4.      שליחה של סחורות שרכשתם דרך האתר; <br/><br/>
      5.    אספקה של שירותים שרכשתם דרך האתר; <br/><br/>
        6.  שליחה של הצהרות, חשבונות עסקה, ותזכורות תשלום אליכם, ואיסוף תשלומים מכם. <br/><br/>
        7.  לשלוח לכם הודעות מסחריות שאינן שיווקיות; <br/><br/>
        8.  לשלוח לכם התראות בדואר אלקטרוני שביקשתם באופן ספציפי; <br/><br/>
        9.  שליחה של הניוזלטר שלנו אליכם בדואר אלקטרוני, אם ביקשתם זאת (אתם יכולים להודיע לנו בכל עת שכבר אין לכם צורך בניוזלטר); <br/><br/>
        10.  שליחה של מסרים שיווקיים שקשורים לעסק שלנו והעסקים של חברות צד ג’ שנבחרו בקפידה שלדעתנו עשויות לעניין אתכם, בדואר או, במקרים שבהם הסכמתם לכך ספציפית, בדואר האלקטרוני, או באמצעות טכנולוגיות דומות (אתם יכולים ליידע אותנו בכל עת אם אתם כבר לא מעוניינים במסרים שיווקיים); <br/><br/>
        11.  אספקה של מידע סטטיסטי בנוגע למשתמשים שלנו לצד ג’ (אבל צד ג’ זה לא יוכל לזהות אף משתמש בודד לפי המידע); <br/><br/>
        12.  טיפול בבירורים ותלונות שהוגשו על ידכם או נוגעות אליכם וקשורות לאתר שלנו; <br/><br/>
        13.  לשמור על האתר שלנו מאובטח ולמנוע הונאה; <br/><br/>
        14.  אימות של היענות לתנאי השירות המכתיבים את אופן השימוש באתר (כולל ניטור של הודעות פרטיות שנשלחו דרך שירות ההודעות הפרטיות של האתר שלנו); <br/><br/>
        15.  ושימושים אחרים. <br/><br/>
          אם תמסרו לנו מידע אישי לפרסום באתר שלנו, אנחנו נפרסם את המידע ונשתמש בו בדרכים אחרות בהתאם לרישיון שתספקו לנו. <br/><br/>
          ניתן להשתמש בהגדרות הפרטיות שלכם כדי להגביל את הפרסום של המידע שלכם באתר שלנו, וניתן לשנות אותן בעזרת בקרות הפרטיות שבאתר.
          <br/><br/>
          אנחנו לא נספק את הפרטים האישיים שלכם ללא הסכמתכם לכל צד ג’ שהוא, לצורך השיווק הישיר שלו, או של כל צד ג’ אחר.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          {/* The Cookies We Set */}
          ה. חשיפת פרטים אישיים
        </Typography>
        {/* <Typography paragraph>Account related cookies:</Typography> */}
        <Typography paragraph>
        אנחנו עשויים למסור את הפרטים האישיים שלכם לכל אחד מהעובדים, המנהלים, המבטחים, היועצים המקצועיים, הסוכנים, הספקים, או קבלני המשנה שלנו, במידה סבירה וכנדרש למטרות המצוינות במדיניות זו. <br/><br/>

        אנחנו עשויים למסור את הפרטים האישיים שלכם לכל חברה בקבוצת החברות שלנו (זה אומר כל חברות הבת שלנו, חברת הגג שלנו, וכל חברות הבת שלה) במידה סבירה וכנדרש למטרות המצוינות במדיניות זו.<br/><br/>

        אנחנו עשויים למסור את הפרטים האישיים שלכם:<br/><br/>

        1. לפי מה שנדרש מאתנו על פי חוק;<br/><br/>
        2. בהקשר של כל הליך משפטי קיים או עתידי;<br/><br/>
        3. על מנת לבסס, להפעיל, או להגן על זכויותינו המשפטיות (כולל אספקה של מידע לאחרים למטרות מניעת הונאה והפחתה של סיכון אשראי);<br/><br/>
        4. לרוכש (או הרוכש הפוטנציאלי) של כל עסק או רכוש שאנחנו רוכשים (או שוקלים לרכוש);<br/><br/>
        5. ולכל אדם שאנחנו מאמינים במידה סבירה שעשוי לפנות לבית דין או לכל רשות מוסמכת לצורך מסירה של הפרטים האישיים בהם סביר לדעתנו שאותו בית דין או רשות יורה על מסירה של פרטים אישיים אלה.<br/><br/>
        למעט על פי הכתוב במדיניות זו, אנו לא נספק את הפרטים האישיים שלכם לצד ג’.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          {/* Login related cookies: */}ו. העברות נתונים בינלאומיות
          </Typography>
        <Typography paragraph>
        1. ייתכן שמידע שאנחנו אוספים יאוחסן, יעובד, ויועבר בין כל אחת מהמדינות בהן אנו פועלים, על מנת לאפשר לנו להשתמש במידע בהתאם למדיניות זו.<br/><br/>
2. ייתכן שמידע שאנחנו אוספים יועבר למדינות הבאות, להן אין חוקי הגנת נתונים התואמים את אלה הפועלים באזור הכלכלי האירופי: ארצות הברית של אמריקה, רוסיה, יפן, סין, והודו.<br/><br/>
3. פרטים אישיים שאתם מפרסמים באתר שלנו או מוסרים לפרסום באתר שלנו עשויים להיות זמינים, באמצעות האינטרנט, מסביב לעולם. אנחנו לא יכולים למנוע את השימוש או השימוש לרעה במידע הזה בידי אחרים.<br/><br/>
4. אתם מביעים הסכמה להעברות הפרטים האישיים המתוארות בסעיף ו’ זה.
        </Typography>
        <Typography variant="h6" color="primary">
          {/* Site preferences cookies: */}ז. שמירת פרטים אישיים
          </Typography>
        <Typography paragraph>
        1. סעיף ג’ זה מפרט את תהליך ומדיניות שמירת הנתונים שלנו, המתוכננים לעזור להבטיח שאנחנו נענים לחובות המשפטיות שלנו הנוגעות לשמירה ולמחיקה של פרטים אישיים.<br/><br/>
2. פרטים אישיים שאנחנו מעבדים עבור כל מטרה או מטרות, לא יישמרו יותר מכמה שנדרש עבור מטרה או מטרות אלה.<br/><br/>
3. מבלי לגרוע מן האמור בסעיף ז-2, לרוב אנו נמחק נתונים אישיים הנמצאים בקטגוריות המפורטות מטה בתאריך: [31.12.2020];<br/><br/>
4. על אף ההוראות האחרות בסעיף ז’, אנו נשמור מסמכים (כולל מסמכים אלקטרוניים) המכילים נתונים אישיים:<br/>
- 4.1 - לפי מה שנדרש מאתנו על פי חוק;<br/>
- 4.2 - אם לדעתנו המסמכים עשויים להיות רלוונטיים לכל הליך משפטי מתמשך או פוטנציאלי;<br/>
- 4.3 - על מנת לבסס, להפעיל, או להגן על זכויותינו המשפטיות (כולל אספקה של מידע לאחרים למטרות מניעת הונאה והפחתה של סיכון אשראי).<br/>
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          {/* Third Party Cookies: */}ח. אבטחת הפרטים האישיים שלכם
        </Typography>
        <Typography paragraph>
        1. אנחנו ננקוט משנה זהירות ארגוני וטכני סביר על מנת למנוע את האבדן, השימוש לרעה, או השינוי של הפרטים האישיים שלכם.<br/><br/>
2. אנחנו נאחסן את כל הפרטים האישיים שאתם מספקים בשרתים מאובטחים (המוגנים בסיסמא ובחומת אש).<br/><br/>
3. כל ההעברות הכספיות הממוחשבות שבוצעו דרך האתר שלנו יהיו מוגנות באמצעות טכנולוגיית הצפנה.<br/><br/>
4. אתם מכירים בכך שהשידור של מידע על פני האינטרנט אינו מאובטח מעצם היותו, ואנחנו ללא יכולים להבטיח שנתונים שנשלחים דרך האינטרנט יהיו מאובטחים.<br/><br/>
5. אתם אחראים על שמירת הסיסמא בה אתם משתמשים לקבלת גישה לאתר שלנו חסויה; אנחנו לא נבקש מכם את הסיסמא שלכם (למעט בזמן ההתחברות לאתר שלנו).
        </Typography>
        {/* <Typography paragraph>
          Third party analytics are used to track and measure usage of this site
          so that we can continue to produce engaging content. These cookies may
          track things such as how long you spend on the site or pages you visit
          which helps us to understand how we can improve the site for you.
        </Typography> */}
        <Typography variant="h6" color="primary" paragraph>
          {/* More Information */}ט. תיקונים
        </Typography>
        <Typography paragraph>
        אנחנו עשויים לעדכן מדיניות זו מעת לעת באמצעות פרסום של גרסה חדשה באתר שלנו. עליכם לבדוק את העמוד הזה מדי פעם על מנת לוודא שאתם מבינים כל שינוי שנעשה במדיניות זו. אנחנו עשויים להודיע לכם על שינויים במדיניות זו בהודעת דואר אלקטרוני או דרך מערכת ההודעות הפרטיות שבאתר שלנו.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
        י. הזכויות שלכם
        </Typography>
        <Typography paragraph>
        אתם יכולים להורות לנו לספק לכם כל פרט מפרטיכם האישיים שאנו מחזיקים הנוגעים אליכם; אספקת פרטים אלה תהיה כפופה לתנאים הבאים:<br/><br/>

1. תשלום של עמלה;<br/><br/>
2. אספקה של ראיות הולמות עבור הזהות שלכם (צילום של הדרכון שלכם באישור נוטריון, יחד עם עותק מקורי של חשבון שירות בו ניתן לראות את הכתובת הנוכחית שלכם). <br/><br/>
אנחנו עשויים לסרב למסור פרטים אישיים שאתם מבקשים עד למידה המורשית על פי חוק.<br/><br/>

אתם יכולים להורות לנו בכל עת לא לעבד את הפרטים האישיים שלכם לצורכי שיווק.<br/><br/>

בפועל, בדרך כלל תבטאו הסכמה מראש לשימוש שלנו בפרטים האישיים שלכם למטרות שיווק, או שאנחנו נספק לכם אפשרות לבחור שלא יעשה בפרטים האישיים שלכם שימוש למטרות שיווקיות.<br/><br/>
יא. אתרים צד ג’

האתר שלנו כולל קישורים חיצוניים, ופרטים על, אתרים צד ג’. אין לנו שליטה על, ואיננו אחראים על, מדיניות הפרטיות והנהלים של כל צד ג’.<br/><br/>
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
        יא. אתרים צד ג’
          </Typography>
        <Typography paragraph>
        האתר שלנו כולל קישורים חיצוניים, ופרטים על, אתרים צד ג’. אין לנו שליטה על, ואיננו אחראים על, מדיניות הפרטיות והנהלים של כל צד ג’.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
        יב. עדכון מידע
          </Typography>
        <Typography paragraph>
        אנא הודיעו לנו אם יש צורך לתקן או לעדכן את הפרטים האישיים שאנו מחזיקים עליכם.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className={classes.backIcon} />
          חזרה
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

CookieRulesDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CookieRulesDialog);
