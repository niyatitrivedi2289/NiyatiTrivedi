/* @ds-bundle: {"format":4,"namespace":"EricssonFieldContentDesignSystem_7ebbb1","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Chip","sourcePath":"components/display/Chip.jsx"},{"name":"OrChip","sourcePath":"components/display/Chip.jsx"},{"name":"DataTable","sourcePath":"components/display/DataTable.jsx"},{"name":"EmptyState","sourcePath":"components/display/EmptyState.jsx"},{"name":"ListItem","sourcePath":"components/display/ListItem.jsx"},{"name":"MasterBadge","sourcePath":"components/display/MasterBadge.jsx"},{"name":"MediaTile","sourcePath":"components/display/MediaTile.jsx"},{"name":"AnnotationToolbar","sourcePath":"components/editor/AnnotationToolbar.jsx"},{"name":"BottomSheet","sourcePath":"components/editor/BottomSheet.jsx"},{"name":"MARK_COLORS","sourcePath":"components/editor/ColorSwatches.jsx"},{"name":"ColorSwatches","sourcePath":"components/editor/ColorSwatches.jsx"},{"name":"DropZone","sourcePath":"components/editor/DropZone.jsx"},{"name":"StyleToggle","sourcePath":"components/editor/StyleToggle.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Snackbar","sourcePath":"components/feedback/Snackbar.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"StatusBar","sourcePath":"components/navigation/AppBar.jsx"},{"name":"AppBar","sourcePath":"components/navigation/AppBar.jsx"},{"name":"SideDrawer","sourcePath":"components/navigation/SideDrawer.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"WebHeader","sourcePath":"components/navigation/WebHeader.jsx"},{"name":"WizardStepper","sourcePath":"components/navigation/WizardStepper.jsx"}],"sourceHashes":{"components/core/Button.jsx":"3bc673e50ade","components/core/Icon.jsx":"c81c20d65a14","components/core/IconButton.jsx":"60ab5731947a","components/display/Card.jsx":"406fc9742d87","components/display/Chip.jsx":"e4102a4575f5","components/display/DataTable.jsx":"8f977fa88f0c","components/display/EmptyState.jsx":"3a69573c312c","components/display/ListItem.jsx":"40ea22a50b48","components/display/MasterBadge.jsx":"345af3631ceb","components/display/MediaTile.jsx":"16f25e89a9a8","components/editor/AnnotationToolbar.jsx":"2a35c63f551c","components/editor/BottomSheet.jsx":"b40de2cec464","components/editor/ColorSwatches.jsx":"80ea1303ec75","components/editor/DropZone.jsx":"ff9c8afaa3d8","components/editor/StyleToggle.jsx":"bc6cf760ca5c","components/feedback/Dialog.jsx":"19787403a1f8","components/feedback/ProgressBar.jsx":"04151119ee55","components/feedback/Snackbar.jsx":"35f703c8c58d","components/feedback/Tooltip.jsx":"afa480c94f8d","components/forms/Checkbox.jsx":"385fa930ba28","components/forms/Radio.jsx":"845bdaa2dd8d","components/forms/Select.jsx":"5820490d8bbb","components/forms/Slider.jsx":"8866b25c42fd","components/forms/Switch.jsx":"d7409e3e5349","components/forms/TextField.jsx":"cb79cfca0a9c","components/navigation/AppBar.jsx":"4b35a913a707","components/navigation/SideDrawer.jsx":"a968b42c36ac","components/navigation/Tabs.jsx":"8b8f2f97bff6","components/navigation/WebHeader.jsx":"c139466cac5f","components/navigation/WizardStepper.jsx":"bab688c1f6aa","ui_kits/content-studio/AddMedia.jsx":"3a657c37b815","ui_kits/content-studio/ReleaseScreens.jsx":"9cce32747dd9","ui_kits/content-studio/Shell.jsx":"b9127a6491fb","ui_kits/content-studio/StepEditor.jsx":"75c7ba00bcaa","ui_kits/field-app/OnboardingScreens.jsx":"954209b848a9","ui_kits/field-app/ProjectScreens.jsx":"7c8f1e524a5f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EricssonFieldContentDesignSystem_7ebbb1 = window.EricssonFieldContentDesignSystem_7ebbb1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "material-icons",
    "aria-hidden": "true",
    style: {
      fontFamily: "'Material Icons'",
      fontSize: size,
      lineHeight: 1,
      color,
      display: 'inline-block',
      userSelect: 'none',
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textTransform: 'none',
      whiteSpace: 'nowrap',
      fontFeatureSettings: "'liga'",
      WebkitFontSmoothing: 'antialiased',
      ...style
    }
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const base = {
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  fontWeight: 400,
  letterSpacing: '.04em',
  textTransform: 'uppercase',
  height: 36,
  padding: '0 24px',
  borderRadius: 2,
  border: '1px solid transparent',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  cursor: 'pointer',
  transition: 'background-color 150ms cubic-bezier(.4,0,.2,1), box-shadow 150ms',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box'
};
function Button({
  variant = 'contained',
  color = 'primary',
  icon,
  children,
  disabled,
  fullWidth,
  onClick,
  style,
  type = 'button'
}) {
  const [h, setH] = useState(false);
  const [p, setP] = useState(false);
  const accent = color === 'accent' ? 'var(--eri-teal)' : 'var(--eri-purple-800)';
  let s;
  if (variant === 'contained') s = {
    background: p ? '#170c5a' : h ? '#2e1f8f' : accent,
    color: '#fff',
    boxShadow: p ? 'var(--shadow-2)' : 'none'
  };else if (variant === 'outlined') s = {
    background: p ? '#eeeeee' : h ? '#f7f7f7' : '#fff',
    color: 'var(--eri-gray-900)',
    borderColor: 'var(--border-button)'
  };else if (variant === 'fab') s = {
    width: 56,
    height: 56,
    padding: 0,
    borderRadius: '50%',
    background: h ? '#2e1f8f' : accent,
    color: '#fff',
    boxShadow: p ? 'var(--shadow-8)' : 'var(--shadow-2)'
  };else s = {
    background: p ? 'rgba(0,0,0,.08)' : h ? 'rgba(0,0,0,.04)' : 'transparent',
    color: color === 'accent' ? 'var(--eri-teal)' : 'var(--eri-purple-800)',
    padding: '0 12px',
    fontWeight: 500
  };
  if (disabled) s = {
    ...s,
    background: variant === 'contained' || variant === 'fab' ? 'rgba(0,0,0,.12)' : s.background === '#fff' ? '#fff' : 'transparent',
    color: 'rgba(0,0,0,.26)',
    boxShadow: 'none',
    cursor: 'default'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      ...base,
      ...s,
      width: fullWidth ? '100%' : s.width,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: variant === 'fab' ? 24 : 20
  }), variant !== 'fab' && children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const {
  useState
} = React;
function IconButton({
  icon,
  color = 'currentColor',
  size = 24,
  onClick,
  disabled,
  label,
  style
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label || icon,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size + 16,
      height: size + 16,
      border: 0,
      borderRadius: '50%',
      padding: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'default' : 'pointer',
      background: h && !disabled ? 'rgba(128,128,128,.14)' : 'transparent',
      color: disabled ? 'rgba(0,0,0,.26)' : color,
      transition: 'background-color 150ms',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  mediaSrc,
  mediaHeight = 160,
  title,
  subtitle,
  children,
  actions,
  elevation = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 2,
      boxShadow: elevation === 0 ? 'none' : elevation >= 2 ? 'var(--shadow-8)' : 'var(--shadow-1)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, mediaSrc && /*#__PURE__*/React.createElement("img", {
    src: mediaSrc,
    alt: "",
    style: {
      width: '100%',
      height: mediaHeight,
      objectFit: 'cover',
      display: 'block'
    }
  }), (title || subtitle) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, subtitle)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '8px',
      justifyContent: 'flex-start'
    }
  }, actions));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Chip.jsx
try { (() => {
function Chip({
  label,
  avatarSrc,
  onDelete,
  selected,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      borderRadius: 16,
      padding: avatarSrc ? '0 12px 0 0' : '0 12px',
      background: selected ? 'var(--color-primary)' : 'var(--eri-gray-200)',
      color: selected ? '#fff' : 'rgba(0,0,0,.87)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      ...style
    }
  }, avatarSrc && /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: "",
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), label, onDelete && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cancel",
    size: 18,
    color: selected ? 'rgba(255,255,255,.7)' : 'rgba(0,0,0,.38)',
    style: {
      cursor: 'pointer'
    },
    onClick: onDelete
  }));
}
function OrChip({
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--eri-gray-600)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, "OR");
}
Object.assign(__ds_scope, { Chip, OrChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/display/DataTable.jsx
try { (() => {
function DataTable({
  title,
  columns = [],
  rows = [],
  highlight = {},
  footer = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      boxShadow: 'var(--shadow-1)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px 0 20px',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 18,
      color: 'rgba(0,0,0,.87)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    color: "rgba(0,0,0,.54)",
    size: 20
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "view_column",
    color: "rgba(0,0,0,.54)",
    size: 20
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "filter_list",
    color: "rgba(0,0,0,.54)",
    size: 20
  })), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c,
    style: {
      textAlign: 'left',
      fontWeight: 500,
      fontSize: 12,
      color: 'rgba(0,0,0,.54)',
      height: 48,
      padding: '0 16px',
      borderBottom: '1px solid var(--border-divider)',
      whiteSpace: 'nowrap'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      height: 40,
      padding: '0 16px',
      borderBottom: '1px solid var(--border-divider)',
      color: 'rgba(0,0,0,.87)',
      background: highlight[i + ':' + j] ? '#eef5d8' : 'transparent',
      whiteSpace: 'nowrap'
    }
  }, cell)))))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 28,
      padding: '0 14px',
      fontSize: 12,
      color: 'rgba(0,0,0,.54)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Rows per page: 10", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow_drop_down",
    size: 18
  })), /*#__PURE__*/React.createElement("span", null, "1-", rows.length, " of ", rows.length), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_left",
    size: 20
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_right",
    size: 20
  })));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/display/EmptyState.jsx
try { (() => {
function EmptyState({
  imageSrc,
  title,
  subtitle,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      padding: '44px 16px',
      ...style
    }
  }, imageSrc && /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      width: 120,
      height: 120,
      borderRadius: '50%',
      display: 'block'
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginTop: 40
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--eri-gray-500)',
      marginTop: 12
    }
  }, subtitle), children);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/display/ListItem.jsx
try { (() => {
const {
  useState
} = React;
function ListItem({
  title,
  subtitle,
  leadingSrc,
  leadingIcon,
  trailing,
  selected,
  onClick,
  dense,
  divider = true,
  style
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 15,
      minHeight: dense ? 71 : 95,
      padding: dense ? '0 20px' : '0 35px',
      boxSizing: 'border-box',
      borderBottom: divider ? '1px solid var(--border-divider)' : 0,
      background: h && onClick ? '#fafafa' : '#fff',
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, leadingSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      background: 'var(--eri-gray-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: leadingSrc,
    alt: "",
    style: {
      width: 26,
      height: 26
    }
  })), leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    color: "rgba(0,0,0,.54)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: selected ? 'var(--eri-lavender)' : 'var(--text-body)',
      lineHeight: 1.4
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), trailing && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center'
    }
  }, trailing));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/display/MasterBadge.jsx
try { (() => {
function MasterBadge({
  children = 'Master',
  small,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: 'var(--eri-yellow)',
      color: '#000',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: small ? 11 : 13,
      textTransform: 'uppercase',
      padding: small ? '3px 8px' : '4px 12px',
      lineHeight: 1.2,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { MasterBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/MasterBadge.jsx", error: String((e && e.message) || e) }); }

// components/display/MediaTile.jsx
try { (() => {
const {
  useState
} = React;
const glyph = k => {
  if (k === 'gif') return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: '#fff',
      border: '2px dashed #bbb',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 10,
      fontWeight: 700,
      color: '#555'
    }
  }, "GIF");
  if (k === 'video') return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play_arrow",
    size: 30,
    color: "#555"
  }));
  if (k === 'image') return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image",
    size: 48,
    color: "#fff"
  });
  if (k === 'audio') return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "music_note",
    size: 52,
    color: "#fff"
  });
  if (k === 'pdf') return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "picture_as_pdf",
    size: 46,
    color: "#fff"
  });
  if (k === 'obj') return /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "view_in_ar",
    size: 46,
    color: "#fff"
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "insert_drive_file",
    size: 48,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 9,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 9,
      fontWeight: 700,
      color: '#b2b2b2'
    }
  }, String(k).toUpperCase()));
};
function MediaTile({
  kind = 'image',
  name,
  size,
  thumbSrc,
  selected,
  master,
  add,
  onClick,
  width = 186,
  style
}) {
  const [h, setH] = useState(false);
  if (add) return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      width,
      height: width,
      boxSizing: 'border-box',
      border: '1px solid var(--border-divider)',
      background: 'var(--surface-muted)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      color: 'var(--eri-purple-800)',
      fontSize: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "add_circle",
    size: 22
  }), typeof add === 'string' ? add : 'Add Media');
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width,
      height: width,
      position: 'relative',
      boxSizing: 'border-box',
      background: thumbSrc ? '#555 center/cover url(' + thumbSrc + ')' : 'var(--surface-media)',
      outline: selected ? '3px solid var(--color-selected)' : 'none',
      outlineOffset: -3,
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      color: '#fff',
      overflow: 'hidden',
      ...style
    }
  }, thumbSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: master ? 'rgba(0,0,0,.25)' : 'rgba(80,80,80,' + (h ? .35 : .5) + ')',
      transition: 'background-color 150ms'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, master ? /*#__PURE__*/React.createElement(__ds_scope.MasterBadge, {
    style: {
      marginTop: 12
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      display: 'flex',
      alignItems: 'center',
      marginTop: -10
    }
  }, glyph(kind))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: master ? 16 : 16,
      textAlign: 'center',
      textShadow: thumbSrc ? '0 1px 2px rgba(0,0,0,.4)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      textTransform: master ? 'uppercase' : 'none'
    }
  }, name), size && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginTop: 2
    }
  }, size)));
}
Object.assign(__ds_scope, { MediaTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/MediaTile.jsx", error: String((e && e.message) || e) }); }

// components/editor/AnnotationToolbar.jsx
try { (() => {
const cell = (on, extra) => ({
  height: 51,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  background: on ? '#fff' : 'transparent',
  cursor: 'pointer',
  color: 'var(--eri-purple-900)',
  padding: '0 10px',
  ...extra
});
function AnnotationToolbar({
  tool,
  onTool,
  shapeColor,
  markSrc,
  onPreview,
  showPreview = true,
  style
}) {
  const c = k => tool === k && shapeColor ? shapeColor : 'var(--eri-purple-900)';
  const tri = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 16,
      background: c('triangle'),
      clipPath: 'polygon(50% 0,100% 100%,0 100%)',
      display: 'block'
    }
  });
  const sh = [['square', /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      background: c('square'),
      display: 'block'
    }
  })], ['circle', /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: c('circle'),
      display: 'block'
    }
  })], ['triangle', tri], ['star', /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 22,
    color: c('star')
  })]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: '#fff',
      border: '1px solid var(--border-divider)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      padding: '0 8px',
      borderRight: '1px solid var(--border-divider)'
    }
  }, sh.map(([k, g]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    "aria-label": k,
    onClick: () => onTool && onTool(k),
    style: cell(false, {
      width: 40,
      padding: 0
    })
  }, g))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onTool && onTool('text'),
    style: cell(false, {
      gap: 2,
      borderRight: '1px solid var(--border-divider)',
      padding: '0 16px'
    })
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "text_fields",
    size: 22
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow_drop_down",
    size: 18,
    color: "var(--eri-gray-500)"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onTool && onTool('icon'),
    style: cell(false, {
      gap: 2,
      borderRight: '1px solid var(--border-divider)',
      padding: '0 14px'
    })
  }, markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: 16,
      height: 16
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "category",
    size: 20
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow_drop_down",
    size: 18,
    color: "var(--eri-gray-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), showPreview && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPreview,
    style: cell(false, {
      gap: 8,
      padding: '0 20px',
      fontFamily: 'inherit',
      fontSize: 14,
      color: 'var(--eri-purple-800)'
    })
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "visibility",
    size: 20
  }), "Preview"));
}
Object.assign(__ds_scope, { AnnotationToolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/AnnotationToolbar.jsx", error: String((e && e.message) || e) }); }

// components/editor/BottomSheet.jsx
try { (() => {
function BottomSheet({
  title,
  children,
  onClose,
  onCollapse,
  headerExtra,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      boxShadow: '0 -4px 12px rgba(0,0,0,.12)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 70,
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px 0 25px',
      borderBottom: headerExtra ? 0 : '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "expand_less",
    color: "var(--eri-gray-600)",
    onClick: onCollapse
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    size: 22,
    color: "var(--eri-gray-600)",
    onClick: onClose
  })), headerExtra, /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/editor/ColorSwatches.jsx
try { (() => {
const MARK_COLORS = ['#cc1918', '#ff8c05', '#efe22b', '#bbd752', '#00c0ff', '#260977'];
function ColorSwatches({
  colors = MARK_COLORS,
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      ...style
    }
  }, colors.map(c => {
    const on = c === value;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      type: "button",
      "aria-label": c,
      onClick: () => onChange && onChange(c),
      style: {
        width: 22,
        height: 22,
        padding: 0,
        background: '#fff',
        border: on ? '1px solid var(--eri-gray-300)' : '1px solid transparent',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        background: c
      }
    }));
  }));
}
Object.assign(__ds_scope, { MARK_COLORS, ColorSwatches });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/ColorSwatches.jsx", error: String((e && e.message) || e) }); }

// components/editor/DropZone.jsx
try { (() => {
function DropZone({
  iconSrc,
  title = 'Drag & drop to upload or',
  hint = 'File Format: .zip',
  buttonLabel = 'Select Files',
  onSelect,
  compact,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      boxShadow: 'var(--shadow-1)',
      padding: 10,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px dashed var(--border-dashed)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: compact ? '40px 16px' : '40px 16px 38px',
      gap: 0
    }
  }, iconSrc && /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      width: 44,
      height: 50,
      marginBottom: 24
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, title), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--eri-gray-500)',
      marginTop: 6
    }
  }, hint), buttonLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onSelect,
    style: {
      marginTop: 16,
      padding: '0 40px'
    }
  }, buttonLabel)));
}
Object.assign(__ds_scope, { DropZone });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/DropZone.jsx", error: String((e && e.message) || e) }); }

// components/editor/StyleToggle.jsx
try { (() => {
function StyleToggle({
  value = 'Filled',
  onChange,
  color = 'var(--eri-purple-900)',
  style
}) {
  const opt = k => {
    const on = k === value;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      onClick: () => onChange && onChange(k),
      style: {
        height: 32,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 10px',
        border: on ? '1px solid var(--border-divider)' : '1px solid transparent',
        background: '#fff',
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        color: 'var(--text-primary)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 13,
        height: 13,
        boxSizing: 'border-box',
        background: k === 'Filled' ? color : 'transparent',
        border: k === 'Filled' ? 0 : '1.5px solid #555'
      }
    }), k);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      ...style
    }
  }, opt('Filled'), opt('Line'));
}
Object.assign(__ds_scope, { StyleToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/StyleToggle.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  width = 428,
  scrim = true,
  style
}) {
  if (!open) return null;
  const box = /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: 'calc(100% - 32px)',
      background: '#fff',
      borderRadius: 2,
      boxShadow: 'var(--shadow-24)',
      fontFamily: 'var(--font-sans)',
      padding: '22px 40px 16px',
      boxSizing: 'border-box',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      color: 'var(--text-dialog-title)',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 20,
      marginRight: -32
    }
  }, actions));
  if (!scrim) return box;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.54)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, box);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  label,
  height = 5,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--eri-progress-track)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: pct + '%',
      background: 'var(--color-primary)',
      transition: 'width 300ms cubic-bezier(.4,0,.2,1)'
    }
  })), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      marginTop: 10
    }
  }, label));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Snackbar.jsx
try { (() => {
function Snackbar({
  message,
  action,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      minHeight: 48,
      padding: '0 24px',
      background: '#323232',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      borderRadius: 2,
      boxShadow: 'var(--shadow-8)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      padding: '14px 0',
      lineHeight: 1.45
    }
  }, message), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--eri-mark-cyan)',
      fontFamily: 'inherit',
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      cursor: 'pointer',
      padding: 0
    }
  }, action));
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  arrow = 'bottom',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block',
      background: 'var(--surface-tooltip)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '26px',
      padding: '11px 22px',
      boxShadow: '0 2px 6px rgba(0,0,0,.3)',
      ...style
    }
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      marginLeft: -8,
      [arrow === 'bottom' ? 'bottom' : 'top']: -8,
      width: 0,
      height: 0,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      [arrow === 'bottom' ? 'borderTop' : 'borderBottom']: '8px solid var(--surface-tooltip)'
    }
  }));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useState
} = React;
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  style
}) {
  const [c, setC] = useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16,
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: disabled ? 'rgba(0,0,0,.38)' : 'var(--text-primary)',
      ...style
    },
    onClick: e => {
      e.preventDefault();
      if (disabled) return;
      setC(!on);
      onChange && onChange(!on);
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      boxSizing: 'border-box',
      borderRadius: 2,
      border: on ? 0 : '2px solid ' + (disabled ? 'rgba(0,0,0,.26)' : '#616161'),
      background: on ? disabled ? 'rgba(0,0,0,.26)' : 'var(--color-primary)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      transition: 'background-color 150ms'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "#fff",
    style: {
      fontWeight: 700
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  disabled,
  muted = true,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: disabled ? 'rgba(0,0,0,.38)' : muted ? 'var(--eri-gray-350)' : 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      boxSizing: 'border-box',
      borderRadius: '50%',
      border: '2px solid ' + (checked ? 'var(--eri-plum)' : '#757575'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--eri-plum)'
    }
  })), label);
}
function RadioGroup({
  options = [],
  value,
  onChange,
  muted = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      ...style
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o,
    label: o,
    muted: muted,
    checked: o === value,
    onChange: () => onChange && onChange(o)
  })));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
function Select({
  label,
  options = [],
  value,
  onChange,
  caption,
  style
}) {
  const [open, setOpen] = useState(false);
  const [v, setV] = useState(value);
  const cur = value ?? v;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--eri-gray-500)',
      marginBottom: 2
    }
  }, caption), /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      borderBottom: caption ? 0 : '1px solid var(--border-input)',
      paddingBottom: caption ? 0 : 8,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: caption ? '0 0 auto' : 1,
      fontSize: 16,
      color: cur ? 'var(--text-primary)' : 'var(--eri-gray-500)'
    }
  }, cur || label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow_drop_down",
    size: 24,
    color: "var(--eri-gray-600)"
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 20,
      top: '100%',
      left: 0,
      minWidth: '100%',
      background: '#fff',
      boxShadow: 'var(--shadow-8)',
      borderRadius: 2,
      padding: '8px 0'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    onClick: () => {
      setV(o);
      setOpen(false);
      onChange && onChange(o);
    },
    style: {
      padding: '0 16px',
      height: 40,
      display: 'flex',
      alignItems: 'center',
      fontSize: 15,
      cursor: 'pointer',
      color: o === cur ? 'var(--color-primary)' : 'var(--text-primary)',
      background: o === cur ? '#f5f5f5' : 'transparent'
    }
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
const {
  useState
} = React;
function Slider({
  value,
  defaultValue = 40,
  min = 0,
  max = 100,
  onChange,
  disabled,
  style
}) {
  const [v, setV] = useState(defaultValue);
  const cur = value ?? v;
  const pct = (cur - min) / (max - min) * 100;
  const set = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const n = Math.round(min + Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * (max - min));
    setV(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (disabled) return;
      set(e);
      const el = e.currentTarget;
      const mv = ev => set({
        currentTarget: el,
        clientX: ev.clientX
      });
      const up = () => {
        window.removeEventListener('mousemove', mv);
        window.removeEventListener('mouseup', up);
      };
      window.addEventListener('mousemove', mv);
      window.addEventListener('mouseup', up);
    },
    style: {
      position: 'relative',
      height: 24,
      cursor: disabled ? 'default' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: 0,
      right: 0,
      height: 2,
      background: 'rgba(0,0,0,.26)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: 0,
      width: pct + '%',
      height: 2,
      background: disabled ? 'rgba(0,0,0,.26)' : 'var(--color-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 6,
      left: 'calc(' + pct + '% - 6px)',
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: disabled ? '#bdbdbd' : 'var(--color-primary)'
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useState
} = React;
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled,
  label,
  style
}) {
  const [c, setC] = useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => {
      if (disabled) return;
      setC(!on);
      onChange && onChange(!on);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16,
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 34,
      height: 20,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 0,
      width: 34,
      height: 14,
      borderRadius: 7,
      background: disabled ? 'rgba(0,0,0,.12)' : on ? 'rgba(38,9,119,.5)' : 'rgba(0,0,0,.38)',
      transition: 'background-color 150ms'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: on ? 14 : 0,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: disabled ? '#bdbdbd' : on ? 'var(--color-primary)' : '#fafafa',
      boxShadow: 'var(--shadow-1)',
      transition: 'left 150ms cubic-bezier(.4,0,.2,1)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
const {
  useState
} = React;
function TextField({
  label,
  value,
  defaultValue,
  onChange,
  error,
  helper,
  trailingIcon,
  type = 'text',
  disabled,
  multiline,
  style
}) {
  const [f, setF] = useState(false);
  const [v, setV] = useState(defaultValue ?? '');
  const val = value ?? v;
  const has = String(val).length > 0;
  const line = error ? 'var(--color-error)' : f ? 'var(--color-primary)' : 'var(--border-input)';
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      paddingTop: has ? 18 : 0,
      ...style
    }
  }, has && label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      fontSize: 12,
      color: error ? 'var(--color-error-text)' : f ? 'var(--color-primary)' : 'var(--eri-gray-500)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: (f || error ? 2 : 1) + 'px solid ' + line,
      paddingBottom: f || error ? 7 : 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    type: type,
    value: val,
    placeholder: label,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    onChange: e => {
      setV(e.target.value);
      onChange && onChange(e.target.value);
    },
    rows: multiline ? 3 : undefined,
    style: {
      flex: 1,
      border: 0,
      outline: 0,
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 16,
      color: disabled ? 'rgba(0,0,0,.38)' : 'var(--text-primary)',
      padding: 0,
      resize: 'none',
      minWidth: 0
    }
  }), error ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "warning",
    size: 20,
    color: "var(--color-error)"
  }) : trailingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: 20,
    color: "var(--color-primary)"
  })), (error || helper) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 8,
      color: error ? 'var(--color-error-text)' : 'var(--eri-gray-500)'
    }
  }, typeof error === 'string' ? error : helper));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppBar.jsx
try { (() => {
function StatusBar({
  time = '12:30',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 6,
      padding: '0 10px',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "wifi",
    size: 18
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "signal_cellular_4_bar",
    size: 16
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "battery_full",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 2
    }
  }, time));
}
function AppBar({
  title,
  navIcon = 'menu',
  onNav,
  actions,
  statusBar = true,
  transparent,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: transparent ? 'transparent' : 'var(--eri-gradient)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      flex: 'none',
      ...style
    }
  }, statusBar && /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px 0 6px',
      gap: 22
    }
  }, navIcon && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: navIcon,
    color: navIcon === 'arrow_back' ? 'rgba(255,255,255,.7)' : '#fff',
    onClick: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 20,
      fontWeight: 400
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, actions)));
}
Object.assign(__ds_scope, { StatusBar, AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideDrawer.jsx
try { (() => {
function SideDrawer({
  open = true,
  onClose,
  avatarSrc,
  email,
  items = [],
  active,
  onSelect,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 304,
      background: '#fff',
      boxShadow: 'var(--shadow-24)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: 'var(--eri-gradient)',
      color: '#fff',
      padding: '40px 16px 12px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, avatarSrc ? /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: "",
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, email)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0',
      overflow: 'auto'
    }
  }, items.map(it => {
    const on = it.label === active;
    return /*#__PURE__*/React.createElement("div", {
      key: it.label,
      onClick: () => onSelect && onSelect(it.label),
      style: {
        height: 48,
        display: 'flex',
        alignItems: 'center',
        gap: 32,
        padding: '0 16px',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 500,
        color: on ? 'var(--color-primary)' : 'rgba(0,0,0,.87)',
        background: on ? '#f0f0f0' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      color: on ? 'var(--color-primary)' : 'rgba(0,0,0,.54)'
    }), it.label);
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      flex: 1,
      background: 'rgba(0,0,0,.4)'
    }
  }));
}
Object.assign(__ds_scope, { SideDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideDrawer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      fontFamily: 'var(--font-sans)',
      borderBottom: '1px solid var(--border-divider)',
      ...style
    }
  }, tabs.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      onClick: () => onChange && onChange(t),
      style: {
        height: 70,
        padding: '0 25px',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 14,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.02em',
        color: 'var(--eri-purple-900)',
        boxShadow: on ? 'inset 0 -2px 0 var(--eri-purple-900)' : 'none',
        transition: 'box-shadow 150ms',
        marginBottom: -1
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/WebHeader.jsx
try { (() => {
function WebHeader({
  logoSrc,
  pageTitle,
  userName,
  userRole,
  avatarSrc,
  onMenu,
  height = 215,
  inset = 108,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--eri-gradient)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      padding: '0 ' + inset + 'px',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 66,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingLeft: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    color: "#fff",
    onClick: onMenu
  }), logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Ericsson",
    style: {
      height: 25,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), userName && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16
    }
  }, userName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .85
    }
  }, userRole)), avatarSrc && /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: "",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      objectFit: 'cover',
      marginLeft: 2
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "more_vert",
    color: "#fff"
  })), pageTitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 400,
      textTransform: 'uppercase',
      paddingLeft: 21,
      marginTop: 14,
      letterSpacing: '.01em'
    }
  }, pageTitle));
}
Object.assign(__ds_scope, { WebHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/WebHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/WizardStepper.jsx
try { (() => {
function WizardStepper({
  steps = [],
  current = 0,
  onStep,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      fontFamily: 'var(--font-sans)',
      background: 'var(--surface-muted)',
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current,
      on = i === current;
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      type: "button",
      onClick: () => onStep && onStep(i),
      style: {
        flex: 1,
        height: 71,
        border: 0,
        borderLeft: i ? '1px solid var(--border-divider)' : 0,
        background: on ? '#fff' : 'transparent',
        boxShadow: on ? 'inset 0 -2px 0 var(--eri-purple-900)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 16,
        color: 'var(--eri-gray-600)'
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 22,
      color: "var(--eri-green)"
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        color: 'var(--eri-purple-900)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        color: on ? 'var(--eri-gray-600)' : undefined
      }
    }, s));
  }));
}
Object.assign(__ds_scope, { WizardStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/WizardStepper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/content-studio/AddMedia.jsx
try { (() => {
(() => {
  const {
    DropZone,
    Tabs,
    Select,
    MediaTile,
    EmptyState,
    Icon
  } = window.EricssonFieldContentDesignSystem_7ebbb1;
  const A = window.STUDIO_ASSETS;
  const LIB = [['gif', 'Filename.gif', 'media-gif-1'], ['gif', 'Filename.gif', 'media-gif-2'], ['video', 'Filename.mov', 'media-mov'], ['image', 'Filename.PNG', 'media-png'], ['audio', 'Filename.mp3'], ['audio', 'Filename.mp3'], ['fbx', 'Filename.fbx'], ['fbx', 'Filename.fbx'], ['obj', 'Filename.obj'], ['obj', 'Filename.obj'], ['pdf', 'Filename.pdf'], ['pdf', 'Filename.pdf']];
  function MediaGrid({
    items = LIB,
    selected,
    onPick,
    add,
    onAdd
  }) {
    const list = add ? [null, ...items.slice(1)] : items;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 186px)',
        justifyContent: 'space-between',
        rowGap: 25,
        padding: '26px 21px 50px 22px'
      }
    }, list.map((m, i) => m === null ? /*#__PURE__*/React.createElement(MediaTile, {
      key: "add",
      add: true,
      onClick: onAdd
    }) : /*#__PURE__*/React.createElement(MediaTile, {
      key: i,
      kind: m[0],
      name: m[1],
      size: "32KB",
      thumbSrc: m[2] && A + 'imagery/' + m[2] + '.png',
      selected: selected === i,
      onClick: onPick && (() => onPick(i, m))
    })));
  }
  function SearchSort() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: 190,
        borderBottom: '1px solid var(--border-divider)',
        paddingBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      color: "var(--eri-gray-600)"
    }), /*#__PURE__*/React.createElement("input", {
      placeholder: "Search Media",
      style: {
        border: 0,
        outline: 0,
        fontFamily: 'inherit',
        fontSize: 16,
        width: 140
      }
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Sort By",
      options: ['Name', 'Date', 'Size'],
      style: {
        width: 86
      }
    }));
  }
  function AddMedia() {
    const [tab, setTab] = React.useState('Shared content');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-muted)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '45px 0',
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid var(--border-divider)'
      }
    }, /*#__PURE__*/React.createElement(DropZone, {
      iconSrc: A + 'icons/upload-file.png',
      style: {
        width: 860,
        boxSizing: 'border-box'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        color: 'var(--text-secondary)',
        padding: '32px 22px 12px'
      }
    }, "Select from uploaded files"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-divider)',
        paddingRight: 20
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      tabs: ['Projects', 'Shared content'],
      value: tab,
      onChange: setTab,
      style: {
        borderBottom: 0
      }
    }), tab === 'Shared content' && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 14
      }
    }, /*#__PURE__*/React.createElement(SearchSort, null))), tab === 'Projects' ? /*#__PURE__*/React.createElement(EmptyState, {
      imageSrc: A + 'illustrations/empty-media.png',
      title: "No media files to show",
      subtitle: "Added media files will appear here",
      style: {
        padding: '44px 0 50px'
      }
    }) : /*#__PURE__*/React.createElement(MediaGrid, null)));
  }
  Object.assign(window, {
    AddMedia,
    MediaGrid,
    SearchSort,
    MEDIA_LIB: LIB
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/content-studio/AddMedia.jsx", error: String((e && e.message) || e) }); }

// ui_kits/content-studio/ReleaseScreens.jsx
try { (() => {
(() => {
  const {
    Select,
    TextField,
    Checkbox,
    Icon,
    IconButton
  } = window.EricssonFieldContentDesignSystem_7ebbb1;
  const A = window.STUDIO_ASSETS;
  function DevicePreview({
    full,
    onFull
  }) {
    const [n, setN] = React.useState(14);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-canvas)',
        flex: 1,
        padding: full ? 0 : '66px 0 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: full ? '100%' : 818,
        height: 52,
        background: '#fff',
        border: '1px solid var(--border-divider)',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px 0 13px'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      caption: "Select Device",
      value: "HTC-One Black",
      options: ['HTC-One Black', 'Samsung Galaxy Tab S3', 'iPad Pro 10.5']
    }), /*#__PURE__*/React.createElement("a", {
      onClick: onFull,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 14,
        color: 'var(--eri-purple-800)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: full ? 'fullscreen_exit' : 'fullscreen',
      size: 22
    }), "View Full Screen")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 50,
        width: 788,
        height: 383,
        background: '#2b2e35',
        borderRadius: 42,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 0 0 3px #3b3f47'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 614,
        height: 348,
        background: '#000',
        padding: 4,
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'center/cover url(' + A + 'imagery/ar-step-preview.png)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 72,
        background: 'linear-gradient(rgba(255,255,255,.85),rgba(255,255,255,0))',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '14px 8px 0',
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron_left",
      size: 30,
      color: "var(--color-primary)",
      onClick: () => setN(Math.max(1, n - 1))
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 10
      }
    }, "Install/Reconfigure CPRI from Radios to R503 Port 7"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron_right",
      size: 30,
      color: "var(--color-primary)",
      onClick: () => setN(Math.min(20, n + 1))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 14,
        bottom: 14,
        display: 'flex',
        height: 56
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        background: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more_horiz",
      color: "#fff",
      size: 30
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'rgba(255,255,255,.85)',
        padding: '0 6px',
        display: 'flex',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 500,
        color: 'var(--color-primary)'
      }
    }, n, "/20"))))));
  }
  function TestForm() {
    return /*#__PURE__*/React.createElement(window.FormPage, {
      title: "Acceptance Testing",
      hint: "Test the App/content with few users before sending to End Users"
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Send Project for testing to"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20,
        marginTop: 84
      }
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Start Date",
      trailingIcon: "date_range"
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "End Date",
      trailingIcon: "date_range"
    })), /*#__PURE__*/React.createElement("a", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        marginTop: 56,
        fontSize: 16,
        color: 'var(--eri-purple-800)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "close",
      size: 20
    }), "Stop Testing"));
  }
  function PublishForm() {
    const [perm, setPerm] = React.useState(false);
    return /*#__PURE__*/React.createElement(window.FormPage, {
      title: "Publish Project",
      hint: "Release this project to specified users"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 400
      }
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Send Project for testing to"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 500,
        color: 'var(--text-primary)',
        marginTop: 48
      }
    }, "Set Project Expiry and completion time"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 400,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Project Expiry Date",
      trailingIcon: "date_range",
      disabled: perm
    })), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Make this project Permanent",
      checked: perm,
      onChange: setPerm,
      style: {
        marginTop: 22
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 50
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 500
      }
    }, "When an End user has to complete the Project"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        color: 'var(--text-muted)',
        marginTop: 10
      }
    }, "Note: End users wont be able to view the assingned project after the set time.")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 186
      }
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Hours"
    }))));
  }
  Object.assign(window, {
    DevicePreview,
    TestForm,
    PublishForm
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/content-studio/ReleaseScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/content-studio/Shell.jsx
try { (() => {
(() => {
  const {
    WebHeader,
    WizardStepper,
    Button
  } = window.EricssonFieldContentDesignSystem_7ebbb1;
  const A = '../../assets/';
  const STEPS = ['Create Project', 'Add Media', 'Create Steps', 'Preview', 'Test', 'Publish'];
  function Shell({
    step,
    onStep,
    children,
    footer,
    height
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--surface-page)',
        overflow: 'auto',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(WebHeader, {
      logoSrc: A + 'logo/ericsson-logo-horizontal-white-hires.png',
      pageTitle: "Projects",
      userName: "John Smith",
      userRole: "Super Admin",
      avatarSrc: A + 'imagery/avatar-john-smith.png'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 108,
        right: 111,
        top: 144,
        minHeight: height || 879,
        background: '#fff',
        boxShadow: 'var(--shadow-shell)',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 60
      }
    }, /*#__PURE__*/React.createElement(WizardStepper, {
      steps: STEPS,
      current: step,
      onStep: onStep
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        borderTop: '1px solid var(--border-divider)',
        position: 'relative',
        minHeight: 0
      }
    }, children), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 72,
        flex: 'none',
        background: 'var(--surface-muted)',
        borderTop: '1px solid var(--border-divider)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 17,
        padding: '0 19px'
      }
    }, footer)));
  }
  function Footer({
    onBack,
    onNext,
    nextLabel = 'Next',
    extra,
    cancel = true,
    save = true
  }) {
    const w = {
      minWidth: 85,
      padding: '0 12px'
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, cancel && /*#__PURE__*/React.createElement(Button, {
      variant: "outlined",
      style: w
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "outlined",
      style: w,
      onClick: onBack
    }, "Back"), save && /*#__PURE__*/React.createElement(Button, {
      variant: "outlined",
      style: w
    }, "Save"), /*#__PURE__*/React.createElement(Button, {
      style: w,
      onClick: onNext
    }, nextLabel), extra);
  }
  function FormPage({
    title,
    hint,
    children,
    width = 818
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '80px 0 60px 232px',
        width: width + 232,
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--text-heading-brand)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-secondary)',
        marginTop: 10
      }
    }, hint), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 44
      }
    }, children));
  }
  Object.assign(window, {
    Shell,
    Footer,
    FormPage,
    STEPS,
    STUDIO_ASSETS: A
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/content-studio/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/content-studio/StepEditor.jsx
try { (() => {
(() => {
  const {
    AnnotationToolbar,
    ColorSwatches,
    StyleToggle,
    BottomSheet,
    Tabs,
    MediaTile,
    Button,
    Icon,
    IconButton,
    OrChip,
    TextField,
    Tooltip,
    Select
  } = window.EricssonFieldContentDesignSystem_7ebbb1;
  const A = window.STUDIO_ASSETS;
  function StepPanel({
    open,
    image,
    section,
    onSection,
    onToggle
  }) {
    if (!open) return /*#__PURE__*/React.createElement("button", {
      onClick: onToggle,
      style: {
        position: 'absolute',
        left: 0,
        top: 348,
        width: 38,
        height: 39,
        border: 0,
        background: '#fff',
        boxShadow: 'var(--shadow-1)',
        cursor: 'pointer',
        zIndex: 3
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron_right",
      color: "var(--eri-gray-900)",
      size: 22
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 230,
        flex: 'none',
        background: 'var(--surface-muted)',
        borderRight: '1px solid var(--border-divider)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => onSection('steps'),
      style: {
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px 0 21px',
        background: '#fff',
        borderBottom: '1px solid var(--border-divider)',
        color: section === 'steps' ? 'var(--eri-purple-800)' : 'var(--text-strong)',
        fontSize: 16,
        cursor: 'pointer'
      }
    }, "Migration", /*#__PURE__*/React.createElement(Icon, {
      name: section === 'steps' ? 'expand_less' : 'expand_more',
      color: "var(--eri-gray-600)"
    })), section === 'steps' ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '19px 21px',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Button, {
      icon: "add_circle",
      fullWidth: true,
      style: {
        justifyContent: 'flex-start',
        padding: '0 14px'
      }
    }, "Add new step"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        height: 116,
        border: '2px solid var(--color-selected)',
        background: image ? 'center/cover url(' + image + ')' : '#fff',
        boxSizing: 'border-box'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        fontSize: 12,
        color: '#202020'
      }
    }, "STEP 1", /*#__PURE__*/React.createElement(Icon, {
      name: "delete",
      size: 18,
      color: "var(--eri-gray-400)"
    }))) : /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      onClick: () => onSection('feedback'),
      style: {
        height: 52,
        display: 'flex',
        alignItems: 'center',
        padding: '0 21px',
        background: '#fff',
        borderTop: '1px solid var(--border-divider)',
        borderBottom: section === 'feedback' ? '1px solid var(--border-divider)' : 0,
        order: section === 'feedback' ? -0 : 0,
        fontSize: 16,
        color: section === 'feedback' ? 'var(--eri-purple-800)' : 'var(--text-strong)',
        cursor: 'pointer'
      }
    }, "Feedback"), /*#__PURE__*/React.createElement("button", {
      onClick: onToggle,
      style: {
        position: 'absolute',
        right: -39,
        top: 348,
        width: 38,
        height: 39,
        border: 0,
        background: '#fff',
        boxShadow: '1px 1px 2px rgba(0,0,0,.08)',
        cursor: 'pointer',
        zIndex: 3
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron_left",
      color: "var(--eri-gray-900)",
      size: 22
    })));
  }
  function HotspotPanel({
    color,
    setColor,
    style,
    setStyle,
    linked,
    onLink,
    onDelete
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 335,
        flex: 'none',
        background: '#fff',
        borderLeft: '1px solid var(--border-divider)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 72,
        display: 'flex',
        alignItems: 'center',
        padding: '0 23px',
        fontSize: 18,
        color: '#000',
        borderBottom: '1px solid var(--border-divider)'
      }
    }, "Hotspot Properties"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '26px 20px'
      }
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Hotspot Name"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-primary)',
        margin: '28px 0 10px'
      }
    }, "Color"), /*#__PURE__*/React.createElement(ColorSwatches, {
      value: color,
      onChange: setColor
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-primary)',
        margin: '26px 0 8px'
      }
    }, "Style"), /*#__PURE__*/React.createElement(StyleToggle, {
      value: style,
      onChange: setStyle,
      style: {
        marginLeft: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-primary)',
        margin: '26px 0 12px'
      }
    }, "Link Media"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        boxShadow: 'var(--shadow-1)',
        padding: 13
      }
    }, linked ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(MediaTile, {
      kind: "gif",
      name: "Filename.gif",
      size: "32KB",
      thumbSrc: A + 'imagery/media-gif-2.png',
      width: 268,
      style: {
        height: 150
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 6,
        right: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "delete",
      size: 20,
      color: "#fff",
      onClick: () => onLink(false)
    }))) : /*#__PURE__*/React.createElement("div", {
      onClick: () => onLink(true),
      style: {
        height: 148,
        border: '1px dashed var(--border-dashed)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        color: 'var(--eri-purple-800)',
        fontSize: 14,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "add_circle",
      size: 22
    }), "Add Media")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 18,
        marginTop: 24,
        fontSize: 14,
        color: 'var(--eri-purple-800)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "photo_size_select_large",
      size: 20
    }), "Resize Media"), /*#__PURE__*/React.createElement("span", {
      onClick: onDelete,
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "delete",
      size: 20
    }), "Delete Hotspot"))));
  }
  function Popover({
    children,
    left
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left,
        top: 51,
        background: '#fff',
        boxShadow: 'var(--shadow-2)',
        zIndex: 6
      }
    }, children);
  }
  function StepEditor({
    panelOpen,
    setPanelOpen
  }) {
    const [image, setImage] = React.useState(null);
    const [sheet, setSheet] = React.useState(null);
    const [tab, setTab] = React.useState('Projects');
    const [tool, setTool] = React.useState(null);
    const [pop, setPop] = React.useState(null);
    const [color, setColor] = React.useState('#bbd752');
    const [sty, setSty] = React.useState('Filled');
    const [spot, setSpot] = React.useState(null);
    const [linked, setLinked] = React.useState(false);
    const [section, setSection] = React.useState('steps');
    const pickTool = t => {
      setTool(t);
      setPop(p => p === t ? null : t);
    };
    const place = e => {
      if (!tool || !['square', 'circle', 'triangle', 'star'].includes(tool)) return;
      const r = e.currentTarget.getBoundingClientRect();
      const s = r.width / e.currentTarget.offsetWidth;
      setSpot({
        x: (e.clientX - r.left) / s,
        y: (e.clientY - r.top) / s,
        t: tool
      });
      setPop(null);
    };
    if (section === 'feedback') return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(StepPanel, {
      open: true,
      section: section,
      onSection: setSection,
      onToggle: () => {}
    }), /*#__PURE__*/React.createElement(FeedbackForm, null));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flex: 1,
        position: 'relative',
        minHeight: 735
      }
    }, /*#__PURE__*/React.createElement(StepPanel, {
      open: panelOpen,
      image: image,
      section: section,
      onSection: setSection,
      onToggle: () => setPanelOpen(!panelOpen)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--surface-canvas)',
        position: 'relative',
        padding: panelOpen ? '78px 0 0 106px' : '115px 0 0 231px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 819,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(AnnotationToolbar, {
      tool: tool,
      onTool: t => t === 'text' || t === 'icon' ? setPop(pop === t ? null : t) : pickTool(t),
      shapeColor: color,
      markSrc: A + 'logo/ericsson-mark-purple.png',
      showPreview: !spot
    }), pop === 'circle' || pop === 'square' || pop === 'triangle' || pop === 'star' ? /*#__PURE__*/React.createElement(Popover, {
      left: 48
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 208,
        padding: '12px 14px',
        borderBottom: '1px solid var(--border-divider)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--eri-gray-500)',
        marginBottom: 8
      }
    }, "Style"), /*#__PURE__*/React.createElement(StyleToggle, {
      value: sty,
      onChange: setSty
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--eri-gray-500)',
        marginBottom: 8
      }
    }, "Color"), /*#__PURE__*/React.createElement(ColorSwatches, {
      value: color,
      onChange: setColor
    }))) : null, pop === 'icon' && /*#__PURE__*/React.createElement(Popover, {
      left: 248
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 424,
        padding: '16px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--eri-gray-500)',
        marginBottom: 8
      }
    }, "Color"), /*#__PURE__*/React.createElement(ColorSwatches, {
      value: color,
      onChange: setColor
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        borderBottom: '1px solid var(--border-divider)',
        padding: '18px 0 8px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      color: "var(--eri-gray-500)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: 'var(--eri-gray-500)'
      }
    }, "Search Icons")), /*#__PURE__*/React.createElement("img", {
      src: A + 'icons/ericsson-icon-library-sample.png',
      alt: "Ericsson icon library",
      style: {
        width: '100%',
        marginTop: 10,
        display: 'block'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        background: '#fff',
        boxShadow: 'var(--shadow-1)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Add Your Step Content here...",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        height: 49,
        border: 0,
        borderBottom: '1px solid var(--border-divider)',
        outline: 0,
        padding: '0 14px',
        fontFamily: 'inherit',
        fontSize: 13,
        color: 'var(--text-primary)'
      }
    }), image ? /*#__PURE__*/React.createElement("div", {
      onClick: place,
      style: {
        height: 331,
        position: 'relative',
        background: 'center/cover url(' + image + ')',
        cursor: tool ? 'crosshair' : 'default'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 10,
        right: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "delete",
      size: 20,
      color: "#fff",
      style: {
        background: '#333',
        borderRadius: 2,
        width: 26,
        height: 26
      },
      onClick: e => {
        e.stopPropagation();
        setImage(null);
        setSpot(null);
      }
    })), spot && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: spot.x - 19,
        top: spot.y - 19,
        width: 38,
        height: 38,
        borderRadius: spot.t === 'circle' ? '50%' : 0,
        background: sty === 'Filled' ? color : 'transparent',
        border: sty === 'Line' ? '3px solid ' + color : 0,
        boxSizing: 'border-box',
        opacity: .85,
        clipPath: spot.t === 'triangle' ? 'polygon(50% 0,100% 100%,0 100%)' : 'none'
      }
    }), !spot && tool && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 20,
        bottom: 20
      }
    }, /*#__PURE__*/React.createElement(Tooltip, {
      arrow: null
    }, "Click on the image to drop a hotspot"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 331,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + 'illustrations/empty-media.png',
      alt: "",
      style: {
        width: 120,
        borderRadius: '50%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        marginTop: 30,
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => setSheet('media'),
      style: {
        cursor: 'pointer',
        color: 'var(--eri-purple-800)'
      }
    }, "Add Media"), /*#__PURE__*/React.createElement(OrChip, null), /*#__PURE__*/React.createElement("a", {
      onClick: () => setSheet('master'),
      style: {
        cursor: 'pointer',
        color: 'var(--eri-purple-800)'
      }
    }, "Add Master")))))), spot && /*#__PURE__*/React.createElement(HotspotPanel, {
      color: color,
      setColor: setColor,
      style: sty,
      setStyle: setSty,
      linked: linked,
      onLink: setLinked,
      onDelete: () => {
        setSpot(null);
        setLinked(false);
        setTool(null);
      }
    }), sheet && /*#__PURE__*/React.createElement(BottomSheet, {
      title: sheet === 'media' ? 'Select media' : 'Select master',
      onClose: () => setSheet(null),
      onCollapse: () => setSheet(null),
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 8
      },
      headerExtra: sheet === 'media' ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-divider)',
          paddingRight: 20
        }
      }, /*#__PURE__*/React.createElement(Tabs, {
        tabs: ['Projects', 'Shared content'],
        value: tab,
        onChange: setTab,
        style: {
          borderBottom: 0
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          paddingBottom: 14
        }
      }, /*#__PURE__*/React.createElement(window.SearchSort, null))) : null
    }, sheet === 'media' ? /*#__PURE__*/React.createElement(window.MediaGrid, {
      add: true,
      onPick: (i, m) => {
        setImage(A + 'imagery/rack-photo.png');
        setSheet(null);
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        padding: '26px 22px 32px'
      }
    }, ['master-1', 'master-2'].map((m, i) => /*#__PURE__*/React.createElement(MediaTile, {
      key: m,
      master: true,
      name: "BBU5216.zip",
      thumbSrc: A + 'imagery/' + m + '.png',
      selected: i === 0,
      onClick: () => {
        setImage(A + 'imagery/rack-photo.png');
        setSheet(null);
      }
    })))));
  }
  function FeedbackForm() {
    const [qs, setQs] = React.useState(1);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '76px 0 0 104px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--text-heading-brand)'
      }
    }, "Feedback"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-secondary)',
        marginTop: 10
      }
    }, "Create questionire for end users to give feedback about the project"), Array.from({
      length: qs
    }).map((_, k) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        width: 822,
        marginTop: 50
      }
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Question"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px 20px',
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Option 1",
      options: ['Option 1', 'Yes', 'No']
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Option 2"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Option 3",
      options: ['Option 3', 'Yes', 'No']
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Option 4"
    })))), /*#__PURE__*/React.createElement("a", {
      onClick: () => setQs(qs + 1),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 44,
        fontSize: 16,
        color: 'var(--eri-purple-800)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "add_circle",
      size: 20
    }), "Add New Question"));
  }
  Object.assign(window, {
    StepEditor,
    FeedbackForm
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/content-studio/StepEditor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-app/OnboardingScreens.jsx
try { (() => {
(() => {
  const {
    Button,
    TextField,
    StatusBar,
    Icon
  } = window.EricssonFieldContentDesignSystem_7ebbb1;
  const A = '../../assets/';
  function Splash({
    onDone
  }) {
    React.useEffect(() => {
      const t = setTimeout(onDone, 1600);
      return () => clearTimeout(t);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      onClick: onDone,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--eri-gradient-diagonal)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("img", {
      src: A + 'logo/ericsson-logo-stacked-white.png',
      alt: "Ericsson",
      style: {
        position: 'absolute',
        left: 245,
        top: 112,
        width: 150
      }
    }));
  }
  const SLIDES = [['onboarding-download', 'Download the Content', 'Download the project content from your list of assigned project', 100], ['onboarding-augment-device', 'Augument Device', 'Point camera to the device which needs to be migrated or installed', 140], ['onboarding-view-information', 'View Information', 'View all the step-by-step instruction and complete your work easily', 200], ['onboarding-help-support', 'Help and Support', 'Have any qurey or problem? contact support or refer \u201cSelf help\u201d', 88]];
  function Onboarding({
    onDone
  }) {
    const [i, setI] = React.useState(0);
    const [img, title, body, w] = SLIDES[i];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--eri-gradient-diagonal)',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 30,
        right: 30,
        top: 69,
        height: 181,
        background: 'rgba(255,255,255,.18)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 53,
        right: 53,
        top: 59,
        height: 201,
        background: 'rgba(255,255,255,.35)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      onClick: () => setI((i + 1) % 4),
      style: {
        position: 'absolute',
        left: 73,
        width: 494,
        top: 49,
        height: 221,
        background: '#fff',
        borderRadius: 2,
        boxShadow: 'var(--shadow-onboarding)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '0 40px 40px 60px',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + 'illustrations/' + img + '.png',
      alt: "",
      style: {
        width: w,
        flex: 'none',
        marginLeft: w > 150 ? -30 : 10
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        color: '#000',
        marginBottom: 8
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        lineHeight: '24px',
        color: 'var(--text-secondary)'
      }
    }, body)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 10
      }
    }, SLIDES.map((_, k) => /*#__PURE__*/React.createElement("span", {
      key: k,
      onClick: e => {
        e.stopPropagation();
        setI(k);
      },
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: k === i ? k === 3 ? 'var(--eri-plum)' : 'var(--eri-purple-900)' : '#ddd',
        cursor: 'pointer'
      }
    })))), /*#__PURE__*/React.createElement("button", {
      onClick: onDone,
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 59,
        border: 0,
        borderTop: '1px solid rgba(255,255,255,.35)',
        background: 'rgba(255,255,255,.1)',
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: 16,
        textTransform: 'uppercase',
        cursor: 'pointer'
      }
    }, "Get Started"));
  }
  function Login({
    onLogin
  }) {
    const [u, setU] = React.useState('');
    const [p, setP] = React.useState('');
    const [err, setErr] = React.useState(false);
    const go = () => {
      if (u.trim().toLowerCase() === 'wrong' || !u.trim()) {
        setErr(true);
        return;
      }
      onLogin();
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--surface-page)',
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 105,
        background: 'var(--eri-gradient)'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 32,
        right: 32,
        top: 46,
        height: 267,
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + 'logo/ericsson-logo-horizontal-purple.png',
      alt: "Ericsson",
      style: {
        position: 'absolute',
        left: 220,
        top: 12,
        width: 136
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 133,
        width: 310,
        top: 62
      }
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "User Name",
      value: u,
      onChange: v => {
        setU(v);
        setErr(false);
      },
      error: err ? 'Username is incorrect.' : false
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Password",
      type: "password",
      value: p,
      onChange: setP,
      trailingIcon: "info",
      style: {
        marginTop: err ? 4 : 18
      }
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: go,
      style: {
        position: 'absolute',
        left: 332,
        top: 198,
        width: 111,
        height: 36,
        fontSize: 15
      }
    }, "Login")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 336,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 12,
        color: '#8f8f8f',
        lineHeight: '25px'
      }
    }, /*#__PURE__*/React.createElement("div", null, "Terms and Conditions"), /*#__PURE__*/React.createElement("div", null, "Version: AB123 | Build: 0987654AB. \\u00a9 Ericsson, 2017, All Rights Reserved")));
  }
  Object.assign(window, {
    Splash,
    Onboarding,
    Login
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-app/OnboardingScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-app/ProjectScreens.jsx
try { (() => {
(() => {
  const {
    AppBar,
    ListItem,
    IconButton,
    Dialog,
    Button,
    ProgressBar,
    RadioGroup,
    SideDrawer
  } = window.EricssonFieldContentDesignSystem_7ebbb1;
  const PA = '../../assets/';
  const PROJECTS = [{
    n: 'AT&T',
    ready: true
  }, {
    n: 'Sprint'
  }, {
    n: 'Varizon'
  }];
  function MyProjects({
    onMenu,
    onOpen
  }) {
    const [dl, setDl] = React.useState(null);
    const [prog, setProg] = React.useState(null);
    const [ready, setReady] = React.useState({
      'AT&T': true
    });
    React.useEffect(() => {
      if (prog === null) return;
      if (prog >= 10) {
        setReady(r => ({
          ...r,
          [dl]: true
        }));
        setProg(null);
        setDl(null);
        return;
      }
      const t = setTimeout(() => setProg(prog + 1), 350);
      return () => clearTimeout(t);
    }, [prog]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      title: "My Projects",
      onNav: onMenu
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ListItem, {
      key: p.n,
      leadingSrc: PA + 'logo/ericsson-mark-purple.png',
      title: p.n,
      subtitle: "Migration . Expires on12MAY",
      trailing: /*#__PURE__*/React.createElement(IconButton, {
        icon: ready[p.n] ? 'play_arrow' : 'file_download',
        color: "var(--color-primary)",
        onClick: () => ready[p.n] ? onOpen(p.n) : setDl(p.n)
      })
    }))), dl && prog === null && /*#__PURE__*/React.createElement(Dialog, {
      title: 'Start ' + dl + ' Download',
      onClose: () => setDl(null),
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        color: "accent",
        onClick: () => setDl(null)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        color: "accent",
        onClick: () => setProg(0)
      }, "Download"))
    }, "Would you like to start ", dl, " Project assignment? The Project size is 10 MB and would take approximately 5 mins to download."), prog !== null && /*#__PURE__*/React.createElement(Dialog, {
      title: "Download in Progress",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        color: "accent",
        onClick: () => {
          setProg(null);
          setDl(null);
        }
      }, "Cancel")
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: prog,
      max: 10,
      label: prog + 'MB of 10MB'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, "Tip: You can \\u201cSTOP\\u201d or \\u201cPAUSE\\u201d a project any time. Tap \\u201cRESUME\\u201d to restart a project.")));
  }
  function Feedback({
    onMenu,
    onSubmit
  }) {
    const [a, setA] = React.useState({
      1: 'Answer option 1',
      2: 'Answer option 1'
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      title: "Feedback",
      onNav: onMenu,
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "text",
        onClick: onSubmit,
        style: {
          color: '#fff',
          fontSize: 16,
          fontWeight: 400
        }
      }, "Submit")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: '22px 20px'
      }
    }, [1, 2, 3].map(q => /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        marginBottom: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 500,
        color: 'var(--text-body)',
        marginBottom: 20
      }
    }, "Select appropriate answer for this Question ", q), /*#__PURE__*/React.createElement(RadioGroup, {
      options: ['Answer option 1', 'Answer Option 2', 'Answer option 3'],
      value: a[q],
      onChange: v => setA({
        ...a,
        [q]: v
      })
    })))));
  }
  function SelfHelp({
    onBack
  }) {
    const [sel, setSel] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      title: "Self Help",
      navIcon: "arrow_back",
      onNav: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, ['Troubleshoot one', 'Troubleshoot two', 'Troubleshoot three', 'Troubleshoot four', 'Troubleshoot five'].map((t, i) => /*#__PURE__*/React.createElement(ListItem, {
      key: t,
      dense: true,
      title: t,
      selected: i === sel,
      onClick: () => setSel(i)
    }))));
  }
  function StepViewer({
    project,
    onBack,
    onHelp
  }) {
    const [n, setN] = React.useState(14);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: '#000',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      title: project + ' \u00b7 Migration',
      navIcon: "arrow_back",
      onNav: onBack,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
        icon: "help_outline",
        color: "#fff",
        onClick: onHelp
      }), /*#__PURE__*/React.createElement(IconButton, {
        icon: "close",
        color: "#fff",
        onClick: onBack
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: 'relative',
        background: 'center/cover url(' + PA + 'imagery/ar-step-preview.png)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 44,
        background: 'rgba(255,255,255,.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 6px',
        fontFamily: 'var(--font-sans)',
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron_left",
      color: "var(--color-primary)",
      size: 30,
      onClick: () => setN(Math.max(1, n - 1))
    }), /*#__PURE__*/React.createElement("span", null, "Install/Reconfigure CPRI from Radios to R503 Port 7"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron_right",
      color: "var(--color-primary)",
      size: 30,
      onClick: () => setN(Math.min(20, n + 1))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 14,
        bottom: 14,
        display: 'flex',
        height: 46,
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        background: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons",
      style: {
        color: '#fff'
      }
    }, "more_horiz")), /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'rgba(255,255,255,.85)',
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
        fontSize: 17,
        fontWeight: 500,
        color: 'var(--color-primary)'
      }
    }, n, "/20"))));
  }
  Object.assign(window, {
    MyProjects,
    Feedback,
    SelfHelp,
    StepViewer,
    PROJECTS
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-app/ProjectScreens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.OrChip = __ds_scope.OrChip;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.MasterBadge = __ds_scope.MasterBadge;

__ds_ns.MediaTile = __ds_scope.MediaTile;

__ds_ns.AnnotationToolbar = __ds_scope.AnnotationToolbar;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.MARK_COLORS = __ds_scope.MARK_COLORS;

__ds_ns.ColorSwatches = __ds_scope.ColorSwatches;

__ds_ns.DropZone = __ds_scope.DropZone;

__ds_ns.StyleToggle = __ds_scope.StyleToggle;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.SideDrawer = __ds_scope.SideDrawer;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.WebHeader = __ds_scope.WebHeader;

__ds_ns.WizardStepper = __ds_scope.WizardStepper;

})();
