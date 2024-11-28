import { describe, expect, test } from "@jest/globals";
import { StylesMapper } from "../../../src";

describe("Should create a StylesMapping instance", () => {
  test("Create an instance", () => {
    const stylesMapper = StylesMapper.create();
    expect(stylesMapper).toBeInstanceOf(StylesMapper);
  });

  test("Null values", () => {
    const nullValue = null;
    const stylesMapper = StylesMapper.create()
      .alignItems(nullValue)
      .animate(nullValue)
      .backgroundColor(nullValue)
      .backgroundOpacity(nullValue)
      .basis(nullValue)
      .border(nullValue)
      .borderColor(nullValue)
      .borderOpacity(nullValue)
      .borderStyle(nullValue)
      .cursor(nullValue)
      .direction(nullValue)
      .display(nullValue)
      .fontSize(nullValue)
      .fontWeight(nullValue)
      .gap(nullValue)
      .gridColumnEnd(nullValue)
      .gridColumnSpan(nullValue)
      .gridColumnStart(nullValue)
      .gridColumns(nullValue)
      .gridRowEnd(nullValue)
      .gridRowSpan(nullValue)
      .gridRowStart(nullValue)
      .gridRows(nullValue)
      .height(nullValue)
      .justifyContent(nullValue)
      .margin(nullValue)
      .maxHeight(nullValue)
      .maxWidth(nullValue)
      .minHeight(nullValue)
      .minWidth(nullValue)
      .overflow(nullValue)
      .padding(nullValue)
      .position(nullValue)
      .rounded(nullValue)
      .scale(nullValue)
      .shadow(nullValue)
      .shadowColor(nullValue)
      .size(nullValue)
      .textAlign(nullValue)
      .textCase(nullValue)
      .textColor(nullValue)
      .transition(nullValue)
      .transitionDelay(nullValue)
      .transitionDuration(nullValue)
      .transitionEase(nullValue)
      .visibility(nullValue)
      .width(nullValue);

    expect(stylesMapper).toBeInstanceOf(StylesMapper);
    expect(stylesMapper.write()).toBe("");
  });

  test("Create in correct order classes", () => {
    const stylesMapper = StylesMapper.create("outline-none", "peer")
      .visibility("invisible")
      .visibility("visible")
      .position("fixed")
      .margin(4)
      .margin({ x: 3, y: 4 })
      .margin({ bottom: 2, left: 2, right: 2, top: 2 })
      .display("grid")
      .height(10)
      .width(20)
      .basis("10/12")
      .scale(90)
      .animate("spin")
      .cursor("pointer")
      .gridColumns(2)
      .gridRows(2)
      .alignItems("center")
      .justifyContent("center")
      .gap(4)
      .gap({ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 })
      .overflow("hidden")
      .rounded("xl")
      .border("px")
      .borderStyle("dashed")
      .borderColor("secondary")
      .backgroundColor("primary")
      .backgroundOpacity(50)
      .padding(4)
      .padding({ x: 8, y: 8 })
      .padding({ bottom: 2, left: 2, right: 2, top: 2 })
      .textAlign("center")
      .fontSize("2xl")
      .fontWeight("semibold")
      .textCase("uppercase")
      .textColor("error")
      .shadow("xs")
      .shadowColor("success")
      .transition("all")
      .transitionDelay(100)
      .transitionDuration(300)
      .transitionEase("linear")
      .hover({
        scale: 110,
      })
      .open({
        gap: 4,
      })
      .active({
        backgroundOpacity: 100,
      })
      .disabled({
        backgroundOpacity: 5,
      })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)invisible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)peer(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)visible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)fixed(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)m-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)mx-3(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)my-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)mb-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)ml-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)mr-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)mt-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)h-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)w-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)basis-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)scale-90(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)animate-spin(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)cursor-pointer(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid-cols-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid-rows-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid-rows-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)gap-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)overflow-hidden(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)rounded-xl(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-dashed(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-secondary(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)bg-primary(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)bg-opacity-50(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)p-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)px-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)py-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)pb-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)pl-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)pr-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)pt-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)text-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)text-2xl(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)font-semibold(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)uppercase(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)text-error(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)shadow-xs(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)shadow-success(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)outline-none(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)transition-all(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)delay-100(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)duration-300(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)ease-linear(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:gap-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:scale-110(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:bg-opacity-100(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:bg-opacity-5(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:gap-1(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:gap-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:gap-3(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:gap-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:gap-5(?!\S)/);

    expect(stylesMapper).toMatch(
      /peer\svisible\sfixed\sm-4\smx-3\smy-4\smb-2\sml-2\smr-2\smt-2\sgrid\sh-10\sw-20\sbasis-10\/12\sscale-90\sanimate-spin\scursor-pointer\sgrid-cols-2\sgrid-rows-2\sitems-center\sjustify-center\sgap-4\soverflow-hidden\srounded-xl\sborder\sborder-dashed\sborder-secondary\sbg-primary\sbg-opacity-50\sp-4\spx-8\spy-8\spb-2\spl-2\spr-2\spt-2\stext-center\stext-2xl\sfont-semibold\suppercase\stext-error\sshadow-xs\sshadow-success\soutline-none\stransition-all\sdelay-100\sduration-300\sease-linear\sopen:gap-4\shover:scale-110\sactive:bg-opacity-100\sdisabled:bg-opacity-5\sxs:gap-1\ssm:gap-2\smd:gap-3\slg:gap-4\sxl:gap-5/
    );
  });
});

describe("Should make a string with classes from Tailwind CSS", () => {
  test("Flex", () => {
    const stylesMapper = new StylesMapper().display("flex").write();
    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
  });

  test("Block to Flex", () => {
    const stylesMapper = new StylesMapper()
      .display("block")
      .display("flex")
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)block(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
  });

  test("Inline flex", () => {
    const stylesMapper = new StylesMapper().display("inline-flex");

    expect(stylesMapper.write()).toMatch(/(?<!\S)inline-flex(?!\S)/);
  });

  test("Flex align", () => {
    const stylesMapper = new StylesMapper().alignItems("center");

    expect(stylesMapper.write()).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper.write()).toMatch(/(?<!\S)items-center(?!\S)/);
  });

  test("Flex justify", () => {
    const stylesMapper = new StylesMapper().justifyContent("center").write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
  });

  test("Justify content", () => {
    const stylesMapper = new StylesMapper()
      .display("grid")
      .justifyContent("end")
      .justifyContent("center")
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)justify-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
  });

  test("Flex direction", () => {
    const stylesMapper = new StylesMapper().direction("column").write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex-col(?!\S)/);
  });

  test("Text Color", () => {
    const stylesMapper = new StylesMapper().textColor("info").write();

    expect(stylesMapper).toMatch(/(?<!\S)text-info(?!\S)/);
  });

  test("Font Size", () => {
    const stylesMapper = new StylesMapper().fontSize("base").write();

    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!\S)/);
  });

  test("Font Weight", () => {
    const stylesMapper = new StylesMapper().fontWeight("semibold").write();

    expect(stylesMapper).toMatch(/(?<!\S)font-semibold(?!\S)/);
  });

  test("Text Case", () => {
    const stylesMapper = new StylesMapper().textCase("capitalize").write();

    expect(stylesMapper).toMatch(/(?<!\S)capitalize(?!\S)/);
  });

  test("Background Color", () => {
    const stylesMapper = new StylesMapper().backgroundColor("inherit").write();

    expect(stylesMapper).toMatch(/(?<!\S)bg-inherit(?!\S)/);
  });

  test("Background Opacity", () => {
    const stylesMapper = new StylesMapper()
      .backgroundOpacity(100)
      .backgroundOpacity(50)
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)bg-opacity-100(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)bg-opacity-50(?!\S)/);
  });

  test("Padding", () => {
    const stylesMapper = new StylesMapper().padding(10).write();

    expect(stylesMapper).toMatch(/(?<!\S)p-10(?!\S)/);
  });

  test("Width", () => {
    const stylesMapper = new StylesMapper().width("auto").write();

    expect(stylesMapper).toMatch(/(?<!\S)w-auto(?!\S)/);
  });

  test("Height", () => {
    const stylesMapper = new StylesMapper().height("px").write();

    expect(stylesMapper).toMatch(/(?<!\S)h-px(?!\S)/);
  });

  test("Rounded", () => {
    const stylesMapper = new StylesMapper()
      .rounded("full")
      .rounded("xl")
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)rounded-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)rounded-xl(?!\S)/);
  });

  test("Size only", () => {
    const stylesMapper = new StylesMapper().size("full").write();

    expect(stylesMapper).toMatch(/(?<!\S)size-full(?!\S)/);
  });
});

describe("Mixed", () => {
  test("Mixed", () => {
    const stylesMapper = new StylesMapper()
      .position("relative")
      .visibility("visible")
      .display("flex")
      .alignItems("center")
      .justifyContent("center")
      .direction("column")
      .basis("full")
      .maxWidth("full")
      .textColor("error")
      .fontSize("base")
      .fontWeight("semibold")
      .textCase("uppercase")
      .backgroundColor("primary")
      .backgroundOpacity(40)
      .padding(4)
      .width("full")
      .height("full")
      .scale(50)
      .rounded("xs")
      .cursor("auto")
      .border("px")
      .borderStyle("solid")
      .borderColor("error")
      .gap(4)
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)relative(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)visible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex-col(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)text-error(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)font-semibold(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)bg-primary(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)bg-opacity-40(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)p-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)h-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)scale-50(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)rounded-xs(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)cursor-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-solid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-error(?!\S)/);
  });

  test("Flex justify and flex align", () => {
    const stylesMapper = new StylesMapper()
      .position("static")
      .display("flex")
      .justifyContent("center")
      .alignItems("center")
      .cursor("pointer")
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)static(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)cursor-pointer(?!\S)/);
  });
});

describe("Align items", () => {
  test("Align items with display equals to grid", () => {
    const stylesMapper = new StylesMapper()
      .display("grid")
      .alignItems("center")
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)grid(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-center(?!\S)/);
  });

  test("Align items standard and with selectors", () => {
    const stylesMapper = new StylesMapper()
      .alignItems("start")
      .alignItems("end")
      .active({ alignItems: "start" })
      .hover({ alignItems: "center" })
      .open({ alignItems: "baseline" })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:items-baseline(?!\S)/);
  });

  test("Align items with breakpoints", () => {
    const stylesMapper = new StylesMapper()
      .alignItems({
        xs: "center",
        sm: "end",
        md: "start",
        lg: "stretch",
        xl: "baseline",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:items-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:items-stretch(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:items-baseline(?!\S)/);
    expect(stylesMapper).toMatch(
      /(?<!\S)xs:items-center\ssm:items-end\smd:items-start\slg:items-stretch\sxl:items-baseline(?!\S)/
    );
  });

  test("Align items with breakpoint equals to xs", () => {
    const stylesMapper = new StylesMapper()
      .alignItems("end")
      .alignItems({ xs: "center" })
      .active({ alignItems: { xs: "start" } })
      .hover({ alignItems: { xs: "center" } })
      .open({ alignItems: { xs: "baseline" } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)items-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:active:items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:open:items-baseline(?!\S)/);
    expect(stylesMapper).toMatch(
      /(?<!\S)items-end\sxs:items-center\sxs:open:items-baseline\sxs:hover:items-center\sxs:active:items-start(?!\S)/
    );
  });

  test("Align items with breakpoint equals to sm", () => {
    const stylesMapper = new StylesMapper()
      .alignItems("end")
      .alignItems({ sm: "center" })
      .active({ alignItems: { sm: "start" } })
      .hover({ alignItems: { sm: "center" } })
      .open({ alignItems: { sm: "baseline" } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)items-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:active:items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:hover:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:open:items-baseline(?!\S)/);
    expect(stylesMapper).toMatch(
      /(?<!\S)items-end\ssm:items-center\ssm:open:items-baseline\ssm:hover:items-center\ssm:active:items-start(?!\S)/
    );
  });

  test("Align items with breakpoint equals to md", () => {
    const stylesMapper = new StylesMapper()
      .alignItems("end")
      .alignItems({ md: "center" })
      .active({ alignItems: { md: "start" } })
      .hover({ alignItems: { md: "center" } })
      .open({ alignItems: { md: "baseline" } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)items-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:items-baseline(?!\S)/);
    expect(stylesMapper).toMatch(
      /(?<!\S)items-end\smd:items-center\smd:open:items-baseline\smd:hover:items-center\smd:active:items-start(?!\S)/
    );
  });

  test("Align items with breakpoint equals to lg", () => {
    const stylesMapper = new StylesMapper()
      .alignItems("end")
      .alignItems({ lg: "center" })
      .active({ alignItems: { lg: "start" } })
      .hover({ alignItems: { lg: "center" } })
      .open({ alignItems: { lg: "baseline" } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)items-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:active:items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:hover:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:open:items-baseline(?!\S)/);
    expect(stylesMapper).toMatch(
      /(?<!\S)items-end\slg:items-center\slg:open:items-baseline\slg:hover:items-center\slg:active:items-start(?!\S)/
    );
  });

  test("Align items with breakpoint equals to xl", () => {
    const stylesMapper = new StylesMapper()
      .alignItems("end")
      .alignItems({ xl: "center" })
      .active({ alignItems: { xl: "start" } })
      .hover({ alignItems: { xl: "center" } })
      .open({ alignItems: { xl: "baseline" } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)items-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:active:items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:hover:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:open:items-baseline(?!\S)/);
    expect(stylesMapper).toMatch(
      /(?<!\S)items-end\sxl:items-center\sxl:open:items-baseline\sxl:hover:items-center\sxl:active:items-start(?!\S)/
    );
  });
});

describe("Animate", () => {
  test("Animate", () => {
    const stylesMapper = new StylesMapper().animate("ping").write();
    expect(stylesMapper).toMatch(/(?<!\S)animate-ping(?!\S)/);
  });
});

describe("Background color", () => {
  test("Background color", () => {
    const stylesMapper = new StylesMapper().backgroundColor("primary").write();
    expect(stylesMapper).toMatch(/(?<!\S)bg-primary(?!\S)/);
  });

  test("Background color active", () => {
    const stylesMapper = new StylesMapper()
      .backgroundColor("primary")
      .active({ backgroundColor: "secondary" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)bg-primary(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:bg-secondary(?!\S)/);
    expect(stylesMapper).toMatch(/bg-primary\sactive:bg-secondary/);
  });

  test("Background color disabled", () => {
    const stylesMapper = new StylesMapper()
      .backgroundColor("primary")
      .disabled({ backgroundColor: "error" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)bg-primary(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:bg-error(?!\S)/);
    expect(stylesMapper).toMatch(/bg-primary\sdisabled:bg-error/);
  });

  test("Background color hover", () => {
    const stylesMapper = new StylesMapper()
      .backgroundColor("primary")
      .hover({ backgroundColor: "info" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)bg-primary(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:bg-info(?!\S)/);
    expect(stylesMapper).toMatch(/bg-primary\shover:bg-info/);
  });

  test("Background color open", () => {
    const stylesMapper = new StylesMapper()
      .backgroundColor("primary")
      .open({ backgroundColor: "success" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)bg-primary(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:bg-success(?!\S)/);
    expect(stylesMapper).toMatch(/bg-primary\sopen:bg-success/);
  });
});

describe("Background opacity", () => {
  test("Background opacity", () => {
    const stylesMapper = new StylesMapper().backgroundOpacity(10).write();
    expect(stylesMapper).toMatch(/(?<!\S)bg-opacity-10(?!\S)/);
  });

  test("Background opacity active", () => {
    const stylesMapper = new StylesMapper()
      .backgroundOpacity(10)
      .active({ backgroundOpacity: 50 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)bg-opacity-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:bg-opacity-50(?!\S)/);
    expect(stylesMapper).toMatch(/bg-opacity-10\sactive:bg-opacity-50/);
  });

  test("Background opacity disabled", () => {
    const stylesMapper = new StylesMapper()
      .backgroundOpacity(10)
      .disabled({ backgroundOpacity: 50 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)bg-opacity-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:bg-opacity-50(?!\S)/);
    expect(stylesMapper).toMatch(/bg-opacity-10\sdisabled:bg-opacity-50/);
  });

  test("Background opacity hover", () => {
    const stylesMapper = new StylesMapper()
      .backgroundOpacity(10)
      .hover({ backgroundOpacity: 50 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)bg-opacity-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:bg-opacity-50(?!\S)/);
    expect(stylesMapper).toMatch(/bg-opacity-10\shover:bg-opacity-50/);
  });

  test("Background opacity open", () => {
    const stylesMapper = new StylesMapper()
      .backgroundOpacity(10)
      .open({ backgroundOpacity: 50 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)bg-opacity-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:bg-opacity-50(?!\S)/);
    expect(stylesMapper).toMatch(/bg-opacity-10\sopen:bg-opacity-50/);
  });
});

describe("Basis", () => {
  test("Basis auto", () => {
    const stylesMapper = new StylesMapper().basis("full").basis("auto").write();

    expect(stylesMapper).not.toMatch(/(?<!\S)basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)basis-auto(?!\S)/);
  });

  test("Basis full", () => {
    const stylesMapper = new StylesMapper().basis("full").write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)max-w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)basis-full(?!\S)/);
  });

  test("Basis active", () => {
    const stylesMapper = new StylesMapper()
      .basis("full")
      .active({ basis: "11/12" })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)max-w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:basis-11\/12(?!\S)/);
    expect(stylesMapper).toMatch(/basis-full\sactive:basis-11\/12/);
  });

  test("Basis disabled", () => {
    const stylesMapper = new StylesMapper()
      .basis("full")
      .disabled({ basis: "11/12" })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)max-w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:basis-11\/12(?!\S)/);
    expect(stylesMapper).toMatch(/basis-full\sdisabled:basis-11\/12/);
  });

  test("Basis hover", () => {
    const stylesMapper = new StylesMapper()
      .basis("full")
      .hover({ basis: "11/12" })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)max-w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:basis-11\/12(?!\S)/);
    expect(stylesMapper).toMatch(/basis-full\shover:basis-11\/12/);
  });

  test("Basis open", () => {
    const stylesMapper = new StylesMapper()
      .basis("full")
      .open({ basis: "11/12" })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)max-w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:basis-11\/12(?!\S)/);
    expect(stylesMapper).toMatch(/basis-full\sopen:basis-11\/12/);
  });

  test("Basis both", () => {
    const stylesMapper = new StylesMapper()
      .basis("full")
      .basis({ xs: "full", sm: "10/12", md: "6/12", lg: "4/12", xl: "2/12" })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)max-w-full(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:max-w-full(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:max-w-10(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:max-w-6\/12(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:max-w-4\/12(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:max-w-2\/12(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:basis-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:basis-6\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:basis-4\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:basis-2\/12(?!\S)/);
    expect(stylesMapper).toMatch(
      /basis-full\sxs:basis-full\ssm:basis-10\/12\smd:basis-6\/12\slg:basis-4\/12\sxl:basis-2\/12/
    );
  });

  test("Basis in breakpoint", () => {
    const stylesMapper = new StylesMapper()
      .basis({ xs: "full", sm: "10/12", md: "6/12", lg: "4/12", xl: "2/12" })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:max-w-full(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:max-w-10(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:max-w-6\/12(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:max-w-4\/12(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:max-w-2\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:basis-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:basis-6\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:basis-4\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:basis-2\/12(?!\S)/);
    expect(stylesMapper).toMatch(
      /xs:basis-full\ssm:basis-10\/12\smd:basis-6\/12\slg:basis-4\/12\sxl:basis-2\/12/
    );
  });

  test("Basis in breakpoint partial", () => {
    const stylesMapper = new StylesMapper()
      .basis({ sm: "10/12", lg: "4/12", xl: "2/12" })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:max-w-10(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:max-w-4\/12(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:max-w-2\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:basis-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:basis-4\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:basis-2\/12(?!\S)/);
    expect(stylesMapper).toMatch(
      /sm:basis-10\/12\slg:basis-4\/12\sxl:basis-2\/12/
    );
  });

  test("Basis in breakpoint active", () => {
    const stylesMapper = new StylesMapper()
      .active({
        basis: { xs: "full", sm: "10/12", md: "6/12", lg: "4/12", xl: "2/12" },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:active:basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:active:basis-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:basis-6\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:active:basis-4\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:active:basis-2\/12(?!\S)/);
    expect(stylesMapper).toMatch(
      /xs:active:basis-full\ssm:active:basis-10\/12\smd:active:basis-6\/12\slg:active:basis-4\/12\sxl:active:basis-2\/12/
    );
  });

  test("Basis in breakpoint disabled", () => {
    const stylesMapper = new StylesMapper()
      .disabled({
        basis: { xs: "full", sm: "10/12", md: "6/12", lg: "4/12", xl: "2/12" },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:disabled:basis-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:basis-6\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:disabled:basis-4\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:disabled:basis-2\/12(?!\S)/);
    expect(stylesMapper).toMatch(
      /xs:disabled:basis-full\ssm:disabled:basis-10\/12\smd:disabled:basis-6\/12\slg:disabled:basis-4\/12\sxl:disabled:basis-2\/12/
    );
  });

  test("Basis in breakpoint hover", () => {
    const stylesMapper = new StylesMapper()
      .hover({
        basis: { xs: "full", sm: "10/12", md: "6/12", lg: "4/12", xl: "2/12" },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:hover:basis-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:basis-6\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:hover:basis-4\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:hover:basis-2\/12(?!\S)/);
    expect(stylesMapper).toMatch(
      /xs:hover:basis-full\ssm:hover:basis-10\/12\smd:hover:basis-6\/12\slg:hover:basis-4\/12\sxl:hover:basis-2\/12/
    );
  });

  test("Basis in breakpoint open", () => {
    const stylesMapper = new StylesMapper()
      .open({
        basis: { xs: "full", sm: "10/12", md: "6/12", lg: "4/12", xl: "2/12" },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:open:basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:open:basis-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:basis-6\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:open:basis-4\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:open:basis-2\/12(?!\S)/);
    expect(stylesMapper).toMatch(
      /xs:open:basis-full\ssm:open:basis-10\/12\smd:open:basis-6\/12\slg:open:basis-4\/12\sxl:open:basis-2\/12/
    );
  });
});

describe("Border", () => {
  test("Border", () => {
    const stylesMapper = new StylesMapper()
      .border(8)
      .border("px")
      .borderColor("secondary")
      .borderColor("error")
      .borderOpacity(50)
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)border-8(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)border-secondary(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)border(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-error(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-opacity-50(?!\S)/);
  });

  test("Border active", () => {
    const stylesMapper = new StylesMapper()
      .borderOpacity(50)
      .borderColor("error")
      .border("px")
      .active({
        border: 4,
        borderColor: "success",
        borderOpacity: 100,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)border(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:border-4(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)border-error(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:border-success(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)border-opacity-50(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:border-opacity-100(?!\S)/);
  });

  test("Border disabled", () => {
    const stylesMapper = new StylesMapper()
      .border("px")
      .borderColor("error")
      .disabled({
        border: 4,
        borderColor: "success",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)border(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:border-4(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)border-error(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:border-success(?!\S)/);
  });

  test("Border hover", () => {
    const stylesMapper = new StylesMapper()
      .border("px")
      .borderColor("error")
      .borderOpacity(50)
      .hover({
        border: 4,
        borderColor: "success",
        borderOpacity: 100,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)border(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:border-4(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)border-error(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:border-success(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)border-opacity-50(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:border-opacity-100(?!\S)/);
  });

  test("Border hover", () => {
    const stylesMapper = new StylesMapper()
      .border("px")
      .borderColor("error")
      .hover({
        border: 4,
        borderColor: "success",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)border(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:border-4(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)border-error(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:border-success(?!\S)/);
  });

  test("Border axis", () => {
    const stylesMapper = new StylesMapper().border({ x: 4, y: 2 }).write();

    expect(stylesMapper).toMatch(/(?<!\S)border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-y-2(?!\S)/);
  });

  test("Border axis active", () => {
    const stylesMapper = new StylesMapper()
      .active({
        border: { x: 8, y: 2 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)active:border-x-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:border-y-2(?!\S)/);
  });

  test("Border axis disabled", () => {
    const stylesMapper = new StylesMapper()
      .disabled({
        border: { x: 8, y: 2 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)disabled:border-x-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:border-y-2(?!\S)/);
  });

  test("Border axis hover", () => {
    const stylesMapper = new StylesMapper()
      .hover({
        border: { x: 8, y: 2 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)hover:border-x-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:border-y-2(?!\S)/);
  });

  test("Border axis open", () => {
    const stylesMapper = new StylesMapper()
      .open({
        border: { x: 8, y: 2 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)open:border-x-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:border-y-2(?!\S)/);
  });

  test("Border side", () => {
    const stylesMapper = new StylesMapper()
      .borderColor("error")
      .border({ right: 8 })
      .border({
        top: "px",
        right: 2,
        bottom: 4,
        left: 8,
      })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)border-r-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-error(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-l-8(?!\S)/);
  });

  test("Border side and opacity", () => {
    const stylesMapper = new StylesMapper()
      .border({
        top: "px",
        right: 2,
        bottom: 4,
        left: 8,
      })
      .borderOpacity(100)
      .borderOpacity(50)
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-l-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-opacity-50(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)border-opacity-100(?!\S)/);
    expect(stylesMapper).toMatch(
      /border-b-4\sborder-l-8\sborder-r-2\sborder-t\sborder-opacity-50/
    );
  });

  test("Border side and opacity active", () => {
    const stylesMapper = new StylesMapper()
      .border({
        top: "px",
        right: 2,
        bottom: 4,
        left: 8,
      })
      .borderOpacity(100)
      .borderOpacity(50)
      .active({
        borderOpacity: 80,
      })
      .active({
        border: { top: "px", right: 2, bottom: 4, left: 8 },
        borderOpacity: 40,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-l-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-opacity-50(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)active:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:border-l-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:border-opacity-40(?!\S)/);

    expect(stylesMapper).not.toMatch(/(?<!\S)active:border-opacity-80(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)border-opacity-100(?!\S)/);
    expect(stylesMapper).toMatch(
      /border-b-4\sborder-l-8\sborder-r-2\sborder-t\sborder-opacity-50\sactive:border-b-4\sactive:border-l-8\sactive:border-r-2\sactive:border-t\sactive:border-opacity-40/
    );
  });

  test("Border style active", () => {
    const stylesMapper = new StylesMapper()
      .border("px")
      .borderStyle("double")
      .borderStyle("solid")
      .active({
        borderStyle: "dotted",
      })
      .hover({
        borderStyle: "dashed",
      })
      .disabled({
        borderStyle: "hidden",
      })
      .open({
        borderStyle: "double",
      })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)border-double(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)border(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)border-solid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:border-dotted(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:border-dashed(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:border-hidden(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:border-double(?!\S)/);
  });

  test("Border", () => {
    const stylesMapper = new StylesMapper().border({ xs: 8 }).write();
    expect(stylesMapper).toMatch(/(?<!\S)xs:border-8(?!\S)/);
  });

  test("Border none", () => {
    const stylesMapper = new StylesMapper().border({ xs: 0 }).write();
    expect(stylesMapper).toMatch(/(?<!\S)xs:border-0(?!\S)/);
  });

  test("Border axis", () => {
    const stylesMapper = new StylesMapper()
      .border({
        xs: { x: 4, y: 2 },
        md: { x: 4, y: 2 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:border-y-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:border-y-2(?!\S)/);
  });

  test("Border axis", () => {
    const stylesMapper = new StylesMapper()
      .border({
        md: { y: 4 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)md:border-y-4(?!\S)/);
  });

  test("Border side", () => {
    const stylesMapper = new StylesMapper()
      .border({
        xs: {
          top: "px",
          right: 2,
          bottom: 4,
          left: 8,
        },
        md: {
          top: "px",
          right: 2,
          bottom: 4,
          left: 8,
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:border-l-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:border-l-8(?!\S)/);
  });

  test("Border active xs", () => {
    const stylesMapper = new StylesMapper()
      .border({ xs: 4 })
      .active({ border: { xs: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:active:border-8(?!\S)/);
  });

  test("Border active sm", () => {
    const stylesMapper = new StylesMapper()
      .border({ sm: 4 })
      .active({ border: { sm: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)sm:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:active:border-8(?!\S)/);
  });

  test("Border active md", () => {
    const stylesMapper = new StylesMapper()
      .border({ md: 4 })
      .active({ border: { md: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)md:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:border-8(?!\S)/);
  });

  test("Border active lg", () => {
    const stylesMapper = new StylesMapper()
      .border({ lg: 4 })
      .active({ border: { lg: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)lg:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:active:border-8(?!\S)/);
  });

  test("Border active xl", () => {
    const stylesMapper = new StylesMapper()
      .border({ xl: 4 })
      .active({ border: { xl: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xl:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:active:border-8(?!\S)/);
  });

  test("Border disabled xs", () => {
    const stylesMapper = new StylesMapper()
      .border({ xs: 4 })
      .disabled({ border: { xs: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:border-8(?!\S)/);
  });

  test("Border disabled sm", () => {
    const stylesMapper = new StylesMapper()
      .border({ sm: 4 })
      .disabled({ border: { sm: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)sm:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:disabled:border-8(?!\S)/);
  });

  test("Border disabled md", () => {
    const stylesMapper = new StylesMapper()
      .border({ md: 4 })
      .disabled({ border: { md: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)md:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:border-8(?!\S)/);
  });

  test("Border disabled lg", () => {
    const stylesMapper = new StylesMapper()
      .border({ lg: 4 })
      .disabled({ border: { lg: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)lg:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:disabled:border-8(?!\S)/);
  });

  test("Border disabled xl", () => {
    const stylesMapper = new StylesMapper()
      .border({ xl: 4 })
      .disabled({ border: { xl: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xl:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:disabled:border-8(?!\S)/);
  });

  test("Border hover xs", () => {
    const stylesMapper = new StylesMapper()
      .border({ xs: 4 })
      .hover({ border: { xs: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:border-8(?!\S)/);
  });

  test("Border hover sm", () => {
    const stylesMapper = new StylesMapper()
      .border({ sm: 4 })
      .hover({ border: { sm: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)sm:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:hover:border-8(?!\S)/);
  });

  test("Border hover md", () => {
    const stylesMapper = new StylesMapper()
      .border({ md: 4 })
      .hover({ border: { md: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)md:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:border-8(?!\S)/);
  });

  test("Border hover lg", () => {
    const stylesMapper = new StylesMapper()
      .border({ lg: 4 })
      .hover({ border: { lg: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)lg:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:hover:border-8(?!\S)/);
  });

  test("Border hover xl", () => {
    const stylesMapper = new StylesMapper()
      .border({ xl: 4 })
      .hover({ border: { xl: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xl:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:hover:border-8(?!\S)/);
  });

  test("Border open xs", () => {
    const stylesMapper = new StylesMapper()
      .border({ xs: 4 })
      .open({ border: { xs: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:open:border-8(?!\S)/);
  });

  test("Border open sm", () => {
    const stylesMapper = new StylesMapper()
      .border({ sm: 4 })
      .open({ border: { sm: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)sm:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:open:border-8(?!\S)/);
  });

  test("Border open md", () => {
    const stylesMapper = new StylesMapper()
      .border({ md: 4 })
      .open({ border: { md: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)md:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:border-8(?!\S)/);
  });

  test("Border open lg", () => {
    const stylesMapper = new StylesMapper()
      .border({ lg: 4 })
      .open({ border: { lg: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)lg:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:open:border-8(?!\S)/);
  });

  test("Border open xl", () => {
    const stylesMapper = new StylesMapper()
      .border({ xl: 4 })
      .open({ border: { xl: 8 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xl:border-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:open:border-8(?!\S)/);
  });

  test("Border axis active", () => {
    const stylesMapper = new StylesMapper()
      .active({
        border: {
          xs: { x: 4, y: 2 },
          md: { x: 4, y: 2 },
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:active:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:active:border-y-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:border-y-2(?!\S)/);
  });

  test("Border axis disabled", () => {
    const stylesMapper = new StylesMapper()
      .disabled({
        border: {
          xs: { x: 4, y: 2 },
          md: { x: 4, y: 2 },
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:border-y-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:border-y-2(?!\S)/);
  });

  test("Border axis hover", () => {
    const stylesMapper = new StylesMapper()
      .hover({
        border: {
          xs: { x: 4, y: 2 },
          md: { x: 4, y: 2 },
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:border-y-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:border-y-2(?!\S)/);
  });

  test("Border axis open", () => {
    const stylesMapper = new StylesMapper()
      .open({
        border: {
          xs: { x: 4, y: 2 },
          md: { x: 4, y: 2 },
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:open:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:open:border-y-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:border-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:border-y-2(?!\S)/);
  });

  test("Border side active", () => {
    const stylesMapper = new StylesMapper()
      .active({
        border: {
          xs: {
            top: "px",
            right: 2,
            bottom: 4,
            left: 8,
          },
          md: {
            top: "px",
            right: 2,
            bottom: 4,
            left: 8,
          },
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:active:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:active:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:active:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:active:border-l-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:border-l-8(?!\S)/);
  });

  test("Border side disabled", () => {
    const stylesMapper = new StylesMapper()
      .disabled({
        border: {
          xs: {
            top: "px",
            right: 2,
            bottom: 4,
            left: 8,
          },
          md: {
            top: "px",
            right: 2,
            bottom: 4,
            left: 8,
          },
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:border-l-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:border-l-8(?!\S)/);
  });

  test("Border side hover", () => {
    const stylesMapper = new StylesMapper()
      .hover({
        border: {
          xs: {
            top: "px",
            right: 2,
            bottom: 4,
            left: 8,
          },
          md: {
            top: "px",
            right: 2,
            bottom: 4,
            left: 8,
          },
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:border-l-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:border-l-8(?!\S)/);
  });

  test("Border side open", () => {
    const stylesMapper = new StylesMapper()
      .open({
        border: {
          xs: {
            top: "px",
            right: 2,
            bottom: 4,
            left: 8,
          },
          md: {
            top: "px",
            right: 2,
            bottom: 4,
            left: 8,
          },
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:open:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:open:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:open:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:open:border-l-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:border-t(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:border-r-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:border-b-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:border-l-8(?!\S)/);
  });
});

describe("Cursor", () => {
  test("Cursor pointer", () => {
    const stylesMapper = new StylesMapper().cursor("pointer").write();

    expect(stylesMapper).toMatch(/(?<!\S)cursor-pointer(?!\S)/);
  });

  test("Cursor disabled", () => {
    const stylesMapper = new StylesMapper()
      .cursor("pointer")
      .disabled({ cursor: "not-allowed" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)cursor-pointer(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:cursor-not-allowed(?!\S)/);
    expect(stylesMapper).toMatch(/cursor-pointer\sdisabled:cursor-not-allowed/);
  });
});

describe("Direction", () => {
  test("Flex column", () => {
    const stylesMapper = new StylesMapper().direction("column").write();
    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex-col(?!\S)/);
  });

  test("Flex row", () => {
    const stylesMapper = new StylesMapper().direction("row").write();

    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex-row(?!\S)/);
  });
});

describe("Grid", () => {
  test("Grid", () => {
    const stylesMapper = new StylesMapper().display("grid");

    expect(stylesMapper.write()).toMatch(/(?<!\S)grid(?!\S)/);
  });

  test("Grid rows and columns", () => {
    const stylesMapper = new StylesMapper()
      .display("grid")
      .gridRows(2)
      .gridColumns(2)
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid-rows-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid-cols-2(?!\S)/);
  });

  test("Grid rows and columns, start end 'end'", () => {
    const stylesMapper = new StylesMapper()
      .display("grid")
      .gridRows(2)
      .gridRowEnd(1)
      .gridColumnEnd(1)
      .gridRowEnd(2)
      .gridRowEnd({ xs: 3, sm: 4, md: 5, lg: 6, xl: 7 })
      .gridColumns(2)
      .gridColumnEnd(2)
      .gridColumnEnd({ xs: 3, sm: 4, md: 5, lg: 6, xl: 7 })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)row-end-1(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)col-end-1(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid-rows-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid-cols-2(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)row-end-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:row-end-3(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:row-end-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:row-end-5(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:row-end-6(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:row-end-7(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)col-end-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:col-end-3(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:col-end-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:col-end-5(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:col-end-6(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:col-end-7(?!\S)/);
  });

  test("Grid start and span", () => {
    const stylesMapper = new StylesMapper()
      .gridColumnStart(2)
      .gridRowStart(1)
      .gridColumnStart(1)
      .gridRowStart(2)
      .gridColumnSpan(2)
      .gridRowSpan(2)
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)row-start-1(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)col-start-2(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)col-start-1(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)row-start-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)col-span-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)row-span-2(?!\S)/);
  });

  test("Grid, rows, columns, align and justify", () => {
    const stylesMapper = new StylesMapper()
      .display("grid")
      .gridRows(2)
      .gridColumns(2)
      .alignItems("center")
      .justifyContent("center")
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)grid(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid-rows-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)grid-cols-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
  });

  test("Grid active", () => {
    const stylesMapper = new StylesMapper()
      .display("grid")
      .active({ display: "flex" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:flex(?!\S)/);
    expect(stylesMapper).toMatch(/grid\sactive:flex/);
  });

  test("Grid disabled", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .disabled({ display: "hidden" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:hidden(?!\S)/);
    expect(stylesMapper).toMatch(/flex\sdisabled:hidden/);
  });

  test("Grid hover", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .hover({ display: "inline-flex" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:inline-flex(?!\S)/);
    expect(stylesMapper).toMatch(/flex\shover:inline-flex/);
  });

  test("Grid open", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .open({ display: "inline-flex" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:inline-flex(?!\S)/);
    expect(stylesMapper).toMatch(/flex\sopen:inline-flex/);
  });

  test("Display", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .display({ xs: "hidden" })
      .display({ xs: "block" })
      .display({ sm: "hidden" })
      .display({ md: "grid" })
      .display({ lg: "inline" })
      .display({ xl: "inline-grid" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:hidden(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:block(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:hidden(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:inline(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:inline-grid(?!\S)/);
    expect(stylesMapper).toMatch(
      /flex\sxs:block\ssm:hidden\smd:grid\slg:inline\sxl:inline-grid/
    );
  });

  test("Grid rows and columns", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .alignItems("center")
      .justifyContent("center")
      .display({ md: "grid" })
      .gridRows({ md: 2 })
      .gridColumns({ md: 2 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:grid-rows-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:grid-cols-2(?!\S)/);
  });

  test("Grid start and span", () => {
    const stylesMapper = new StylesMapper()
      .gridColumnStart({ md: 2 })
      .gridColumnStart({ md: 1 })
      .gridRowStart({ md: 2 })
      .gridColumnSpan({ md: 2 })
      .gridRowSpan({ md: 2 })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)md:col-start-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:col-start-1(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:row-start-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:col-span-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:row-span-2(?!\S)/);
  });

  test("Grid, rows, columns, align and justify", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .display({ md: "grid" })
      .gridRows({ md: 2 })
      .gridColumns({ md: 2 })
      .alignItems("center")
      .justifyContent("center")
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:grid-rows-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:grid-cols-2(?!\S)/);
  });

  test("Grid active", () => {
    const stylesMapper = new StylesMapper()
      .active({
        display: "flex",
      })
      .active({
        display: { xs: "block" },
      })
      .active({
        display: { sm: "hidden" },
      })
      .active({
        display: { md: "grid" },
      })
      .active({
        display: { lg: "inline" },
      })
      .active({
        display: { xl: "inline-grid" },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)active:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:active:block(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:active:hidden(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:active:inline(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:active:inline-grid(?!\S)/);
    expect(stylesMapper).toMatch(
      /active:flex\sxs:active:block\ssm:active:hidden\smd:active:grid\slg:active:inline\sxl:active:inline-grid/
    );
  });

  test("Grid disabled", () => {
    const stylesMapper = new StylesMapper()
      .disabled({
        display: "flex",
      })
      .disabled({
        display: { xs: "block" },
      })
      .disabled({
        display: { sm: "hidden" },
      })
      .disabled({
        display: { md: "grid" },
      })
      .disabled({
        display: { lg: "inline" },
      })
      .disabled({
        display: { xl: "inline-grid" },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)disabled:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:block(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:disabled:hidden(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:disabled:inline(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:disabled:inline-grid(?!\S)/);
    expect(stylesMapper).toMatch(
      /disabled:flex\sxs:disabled:block\ssm:disabled:hidden\smd:disabled:grid\slg:disabled:inline\sxl:disabled:inline-grid/
    );
  });

  test("Grid hover", () => {
    const stylesMapper = new StylesMapper()
      .hover({
        display: "flex",
      })
      .hover({
        display: { xs: "block" },
      })
      .hover({
        display: { sm: "hidden" },
      })
      .hover({
        display: { md: "grid" },
      })
      .hover({
        display: { lg: "inline" },
      })
      .hover({
        display: { xl: "inline-grid" },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)hover:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:block(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:hover:hidden(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:hover:inline(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:hover:inline-grid(?!\S)/);
    expect(stylesMapper).toMatch(
      /hover:flex\sxs:hover:block\ssm:hover:hidden\smd:hover:grid\slg:hover:inline\sxl:hover:inline-grid/
    );
  });

  test("Grid open", () => {
    const stylesMapper = new StylesMapper()
      .open({
        display: "flex",
      })
      .open({
        display: { xs: "block" },
      })
      .open({
        display: { sm: "hidden" },
      })
      .open({
        display: { md: "grid" },
      })
      .open({
        display: { lg: "inline" },
      })
      .open({
        display: { xl: "inline-grid" },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)open:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:open:block(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:open:hidden(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:grid(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:open:inline(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:open:inline-grid(?!\S)/);
    expect(stylesMapper).toMatch(
      /open:flex\sxs:open:block\ssm:open:hidden\smd:open:grid\slg:open:inline\sxl:open:inline-grid/
    );
  });
});

describe("Visibility", () => {
  test("Visibility", () => {
    const stylesMapper = new StylesMapper()
      .visibility("invisible")
      .visibility("visible")
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)invisible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)visible(?!\S)/);
  });

  test("Visible active", () => {
    const stylesMapper = new StylesMapper()
      .visibility("visible")
      .active({ visibility: "collapse" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)visible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:collapse(?!\S)/);
    expect(stylesMapper).toMatch(/visible\sactive:collapse/);
  });

  test("Visible disabled", () => {
    const stylesMapper = new StylesMapper()
      .visibility("visible")
      .disabled({ visibility: "collapse" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)visible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:collapse(?!\S)/);
    expect(stylesMapper).toMatch(/visible\sdisabled:collapse/);
  });

  test("Visible hover", () => {
    const stylesMapper = new StylesMapper()
      .visibility("visible")
      .hover({ visibility: "collapse" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)visible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:collapse(?!\S)/);
    expect(stylesMapper).toMatch(/visible\shover:collapse/);
  });

  test("Visible open", () => {
    const stylesMapper = new StylesMapper()
      .visibility("visible")
      .open({ visibility: "collapse" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)visible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:collapse(?!\S)/);
    expect(stylesMapper).toMatch(/visible\sopen:collapse/);
  });

  test("Visibility", () => {
    const stylesMapper = new StylesMapper()
      .visibility({
        xs: "collapse",
        md: "visible",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:collapse(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:visible(?!\S)/);
  });

  test("Visibility", () => {
    const stylesMapper = new StylesMapper()
      .visibility({
        xs: "invisible",
        md: "invisible",
      })
      .visibility({
        xs: "collapse",
        md: "visible",
      })
      .write();
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:invisible(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:invisible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:collapse(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:visible(?!\S)/);
  });
});

describe("Size", () => {
  test("Font size", () => {
    const stylesMapper = new StylesMapper().fontSize("base").write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!\S)/);
  });

  test("Font size", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("xs")
      .fontSize("base")
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)text-xs(?!\S)/);
  });

  test("Font size active", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .active({ fontSize: "lg" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:text-lg(?!\S)/);
    expect(stylesMapper).toMatch(/text-base\sactive:text-lg/);
  });

  test("Font size disabled", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .disabled({ fontSize: "lg" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:text-lg(?!\S)/);
    expect(stylesMapper).toMatch(/text-base\sdisabled:text-lg/);
  });

  test("Font size hover", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .hover({ fontSize: "lg" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:text-lg(?!\S)/);
    expect(stylesMapper).toMatch(/text-base\shover:text-lg/);
  });

  test("Font size open", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .open({ fontSize: "lg" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:text-lg(?!\S)/);
    expect(stylesMapper).toMatch(/text-base\sopen:text-lg/);
  });
});

describe("Weight", () => {
  test("Font Weight", () => {
    const stylesMapper = new StylesMapper().fontWeight("normal").write();
    expect(stylesMapper).toMatch(/(?<!\S)font-normal(?!\S)/);
  });

  test("Font Weight", () => {
    const stylesMapper = new StylesMapper()
      .fontWeight("normal")
      .fontWeight("black")
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)font-black(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)font-normal(?!\S)/);
  });

  test("Font weight active", () => {
    const stylesMapper = new StylesMapper()
      .fontWeight("normal")
      .active({ fontWeight: "thin" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)font-normal(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:font-thin(?!\S)/);
    expect(stylesMapper).toMatch(/font-normal\sactive:font-thin/);
  });

  test("Font size disabled", () => {
    const stylesMapper = new StylesMapper()
      .fontWeight("black")
      .disabled({ fontWeight: "semibold" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)font-black(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:font-semibold(?!\S)/);
    expect(stylesMapper).toMatch(/font-black\sdisabled:font-semibold/);
  });

  test("Font size hover", () => {
    const stylesMapper = new StylesMapper()
      .fontWeight("medium")
      .hover({ fontWeight: "light" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)font-medium(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:font-light(?!\S)/);
    expect(stylesMapper).toMatch(/font-medium\shover:font-light/);
  });

  test("Font size open", () => {
    const stylesMapper = new StylesMapper()
      .fontWeight("extralight")
      .open({ fontWeight: "bold" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)font-extralight(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:font-bold(?!\S)/);
    expect(stylesMapper).toMatch(/font-extralight\sopen:font-bold/);
  });
});

describe("Gap", () => {
  test("Gap", () => {
    const stylesMapper = new StylesMapper().gap(4).write();

    expect(stylesMapper).toMatch(/(?<!\S)gap-4(?!\S)/);
  });

  test("Gap zero", () => {
    const stylesMapper = new StylesMapper().gap(0).write();

    expect(stylesMapper).toMatch(/(?<!\S)gap-0(?!\S)/);
  });

  test("Gap px", () => {
    const stylesMapper = new StylesMapper().gap("px").write();

    expect(stylesMapper).toMatch(/(?<!\S)gap-px(?!\S)/);
  });

  test("Gap axis", () => {
    const stylesMapper = new StylesMapper().gap({ x: 4, y: 2 }).write();

    expect(stylesMapper).toMatch(/(?<!\S)gap-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)gap-y-2(?!\S)/);
  });

  test("Gap axis y", () => {
    const stylesMapper = new StylesMapper().gap({ y: 2 }).write();

    expect(stylesMapper).toMatch(/(?<!\S)gap-y-2(?!\S)/);
  });

  test("Gap", () => {
    const stylesMapper = new StylesMapper().gap({ xs: 8 }).write();
    expect(stylesMapper).toMatch(/(?<!\S)xs:gap-8(?!\S)/);
  });

  test("Gap zero", () => {
    const stylesMapper = new StylesMapper().gap({ xs: 0 }).write();
    expect(stylesMapper).toMatch(/(?<!\S)xs:gap-0(?!\S)/);
  });

  test("Gap px", () => {
    const stylesMapper = new StylesMapper().gap({ xs: "px" }).write();
    expect(stylesMapper).toMatch(/(?<!\S)xs:gap-px(?!\S)/);
  });

  test("Gap axis", () => {
    const stylesMapper = new StylesMapper()
      .gap({
        xs: { x: 4, y: "px" },
        md: { x: 8, y: 4 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:gap-x-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:gap-y-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:gap-x-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:gap-y-4(?!\S)/);
  });
});

describe("Grid template columns", () => {
  test("Grid columns", () => {
    const stylesMapper = new StylesMapper().gridColumns(2).write();
    expect(stylesMapper).toMatch(/(?<!\S)grid-cols-2(?!\S)/);
  });

  test("Grid columns override", () => {
    const stylesMapper = new StylesMapper()
      .gridColumns(1)
      .gridColumns(2)
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)grid-cols-2(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)grid-cols-1(?!\S)/);
  });
});

describe("Position", () => {
  test("Static", () => {
    const stylesMapper = new StylesMapper()
      .position("fixed")
      .position("static")
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)fixed(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)static(?!\S)/);
  });

  test("Absolute", () => {
    const stylesMapper = new StylesMapper()
      .position("static")
      .position("absolute")
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)static(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)absolute(?!\S)/);
  });

  test("Position active", () => {
    const stylesMapper = new StylesMapper()
      .position("absolute")
      .active({ position: "static" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)absolute(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:static(?!\S)/);
    expect(stylesMapper).toMatch(/absolute\sactive:static/);
  });

  test("Position hover", () => {
    const stylesMapper = new StylesMapper()
      .position("static")
      .hover({ position: "absolute" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)static(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:absolute(?!\S)/);
    expect(stylesMapper).toMatch(/static\shover:absolute/);
  });

  test("Position open", () => {
    const stylesMapper = new StylesMapper()
      .position("static")
      .open({ position: "absolute" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)static(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:absolute(?!\S)/);
    expect(stylesMapper).toMatch(/static\sopen:absolute/);
  });

  test("Position", () => {
    const stylesMapper = new StylesMapper()
      .position({
        xs: "absolute",
        md: "fixed",
      })
      .position({
        xs: "static",
        md: "relative",
      })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)xs:absolute(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:fixed(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)xs:static(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:relative(?!\S)/);
  });
});

describe("Hover", () => {
  test("Mixed", () => {
    const stylesMapper = new StylesMapper().hover({
      gap: 4,
      backgroundColor: "error",
    });

    expect(stylesMapper.write()).toMatch(/(?<!\S)hover:gap-4(?!\S)/);
    expect(stylesMapper.write()).toMatch(/(?<!\S)hover:bg-error(?!\S)/);
  });
});

describe("Text", () => {
  test("Text color", () => {
    const stylesMapper = new StylesMapper().textColor("error").write();

    expect(stylesMapper).toMatch(/(?<!\S)text-error(?!\S)/);
  });

  test("Font size", () => {
    const stylesMapper = new StylesMapper().fontSize("xs").write();

    expect(stylesMapper).toMatch(/(?<!\S)text-xs(?!\S)/);
  });

  test("Font weight", () => {
    const stylesMapper = new StylesMapper().fontWeight("semibold").write();

    expect(stylesMapper).toMatch(/(?<!\S)font-semibold(?!\S)/);
  });

  test("Text case", () => {
    const stylesMapper = new StylesMapper()
      .textCase("lowercase")
      .textCase("uppercase")
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)lowercase(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)uppercase(?!\S)/);
  });
});

describe("Height", () => {
  test("Height", () => {
    const stylesMapper = new StylesMapper().height("full").height(0).write();

    expect(stylesMapper).not.toMatch(/(?<!\S)h-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)h-0(?!\S)/);
  });

  test("Height full", () => {
    const stylesMapper = new StylesMapper().height("full").write();

    expect(stylesMapper).toMatch(/(?<!\S)h-full(?!\S)/);
  });
});

describe("Width", () => {
  test("Width", () => {
    const stylesMapper = new StylesMapper().width(0).write();

    expect(stylesMapper).toMatch(/(?<!\S)w-0(?!\S)/);
  });

  test("Width full", () => {
    const stylesMapper = new StylesMapper().width("full").write();

    expect(stylesMapper).toMatch(/(?<!\S)w-full(?!\S)/);
  });
});

describe("Shadow", () => {
  test("Shadow", () => {
    const stylesMapper = new StylesMapper()
      .shadow("xs")
      .shadowColor("secondary")
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)shadow-xs(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)shadow-secondary(?!\S)/);
  });

  test("Shadow", () => {
    const stylesMapper = new StylesMapper()
      .shadow("lg")
      .shadow("xs")
      .shadowColor("secondary")
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)shadow-lg(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)shadow-xs(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)shadow-secondary(?!\S)/);
  });
});

describe("Transition", () => {
  test("Transition", () => {
    const stylesMapper = new StylesMapper()
      .transition("colors")
      .transition("all")
      .transitionDuration(100)
      .transitionDuration(300)
      .transitionDelay(150)
      .transitionDelay(300)
      .transitionEase("in")
      .transitionEase("in-out")
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)transition-colors(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)duration-150(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)duration-100(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)ease-in(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)transition-all(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)duration-300(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)delay-300(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)ease-in-out(?!\S)/);
  });
});

describe("Margin", () => {
  test("Margin", () => {
    const stylesMapper = new StylesMapper().margin("auto").margin(4).write();

    expect(stylesMapper).not.toMatch(/(?<!\S)m-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)m-4(?!\S)/);
  });

  test("Margin zero", () => {
    const stylesMapper = new StylesMapper().margin(0).write();

    expect(stylesMapper).toMatch(/(?<!\S)m-0(?!\S)/);
  });

  test("Margin axis", () => {
    const stylesMapper = new StylesMapper().margin({ x: 4, y: 2 }).write();

    expect(stylesMapper).toMatch(/(?<!\S)mx-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)my-2(?!\S)/);
  });

  test("Margin axis ", () => {
    const stylesMapper = new StylesMapper().margin({ x: 4, y: 2 }).write();
    expect(stylesMapper).toMatch(/(?<!\S)mx-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)my-2(?!\S)/);
  });

  test("Margin side", () => {
    const stylesMapper = new StylesMapper()
      .margin({
        top: 2,
        right: 0,
        bottom: 4,
        left: "auto",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)mt-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)mr-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)mb-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)ml-auto(?!\S)/);
  });

  test("Margin side top", () => {
    const stylesMapper = new StylesMapper()
      .margin(0)
      .margin({
        top: "auto",
      })
      .margin({
        top: 2,
      })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)mt-auto(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)m-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)mt-2(?!\S)/);
  });

  test("Margin side right", () => {
    const stylesMapper = new StylesMapper()
      .margin(0)
      .margin({
        right: 2,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)m-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)mr-2(?!\S)/);
  });

  test("Margin side bottom", () => {
    const stylesMapper = new StylesMapper()
      .margin(0)
      .margin({
        bottom: 2,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)m-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)mb-2(?!\S)/);
  });

  test("Margin side left", () => {
    const stylesMapper = new StylesMapper()
      .margin(0)
      .margin({
        left: 2,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)m-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)ml-2(?!\S)/);
  });

  test("Margin axis hover", () => {
    const stylesMapper = new StylesMapper()
      .margin(2)
      .hover({ margin: { x: 4 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)m-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:mx-4(?!\S)/);
    expect(stylesMapper).toMatch(/m-2\shover:mx-4/);
  });
});

describe("Padding", () => {
  test("Padding", () => {
    const stylesMapper = new StylesMapper().padding(4).write();

    expect(stylesMapper).toMatch(/(?<!\S)p-4(?!\S)/);
  });

  test("Padding zero", () => {
    const stylesMapper = new StylesMapper().padding(0).write();

    expect(stylesMapper).toMatch(/(?<!\S)p-0(?!\S)/);
  });

  test("Padding px", () => {
    const stylesMapper = new StylesMapper().padding("px").write();

    expect(stylesMapper).toMatch(/(?<!\S)p-px(?!\S)/);
  });

  test("Padding axis", () => {
    const stylesMapper = new StylesMapper()
      .padding({ x: 0 })
      .padding({ x: 4, y: 2 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)px-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)py-2(?!\S)/);
  });

  test("Padding axis px", () => {
    const stylesMapper = new StylesMapper()
      .padding({ y: 0 })
      .padding({ x: "px", y: 2 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)px-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)py-2(?!\S)/);
  });

  test("Padding side", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        top: 2,
        right: 0,
        bottom: 4,
        left: 5,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)pt-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)pr-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)pb-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)pl-5(?!\S)/);
  });

  test("Padding side px", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        top: "px",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)pt-px(?!\S)/);
  });
});

describe("Scale", () => {
  test("Scale", () => {
    const stylesMapper = new StylesMapper().scale(95).write();

    expect(stylesMapper).toMatch(/(?<!\S)scale-95(?!\S)/);
  });

  test("Scale", () => {
    const stylesMapper = new StylesMapper().scale(95).write();

    expect(stylesMapper).toMatch(/(?<!\S)scale-95(?!\S)/);
  });

  test("Scale zero", () => {
    const stylesMapper = new StylesMapper().scale(95).scale(0).write();

    expect(stylesMapper).toMatch(/(?<!\S)scale-0(?!\S)/);
  });

  test("Scale", () => {
    const stylesMapper = new StylesMapper()
      .scale(100)
      .scale({ xs: 0, sm: 0, md: 0, lg: 0, xl: 0 })
      .scale({ xs: 50, sm: 75, md: 90, lg: 110, xl: 150 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)scale-100(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:scale-50(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:scale-75(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:scale-90(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:scale-110(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:scale-150(?!\S)/);
  });

  test("Scale zero", () => {
    const stylesMapper = new StylesMapper()
      .scale(100)
      .scale({ xs: 0, sm: 50, md: 75, lg: 90, xl: 95 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)scale-100(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:scale-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:scale-50(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:scale-75(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:scale-90(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:scale-95(?!\S)/);
  });

  test("Scale axis", () => {
    const stylesMapper = new StylesMapper().scale({ x: 50, y: 75 }).write();

    expect(stylesMapper).toMatch(/(?<!\S)scale-x-50(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)scale-y-75(?!\S)/);
  });

  test("Scale axis in breakpoints", () => {
    const stylesMapper = new StylesMapper()
      .scale({ x: 110, y: 150 })
      .scale({
        xs: { x: 50, y: 50 },
        sm: { x: 75, y: 90 },
        md: { x: 90, y: 95 },
        lg: { x: 95, y: 100 },
        xl: { x: 100, y: 110 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)scale-x-110(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)scale-y-150(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)xs:scale-x-50(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:scale-y-50(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)sm:scale-x-75(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:scale-y-90(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)md:scale-x-90(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:scale-y-95(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)lg:scale-x-95(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:scale-y-100(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)xl:scale-x-100(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:scale-y-110(?!\S)/);
  });
});

describe("Size", () => {
  test("Size", () => {
    const stylesMapper = new StylesMapper().size("11/12").write();

    expect(stylesMapper).toMatch(/(?<!\S)size-11\/12(?!\S)/);
  });

  test("Size zero", () => {
    const stylesMapper = new StylesMapper().size("full").size(0).write();

    expect(stylesMapper).toMatch(/(?<!\S)size-0(?!\S)/);
  });
});

describe("Direction in breakpoint", () => {
  test("Flex direction column", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .direction("column")
      .direction({ md: "row" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex-col(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:flex-row(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:flex(?!\S)/);
  });

  test("Flex direction", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .direction({ md: "row" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:flex-row(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:flex(?!\S)/);
  });
});

describe("Font size in breaklpoint", () => {
  test("Font size xs", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xs: "xs" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:text-xs(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxs:text-xs/);
  });

  test("Font size xs", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("xs")
      .fontSize("base")
      .fontSize({ xs: "xl" })
      .fontSize({ xs: "xs" })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)text-xs(?!<\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:text-xs(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxs:text-xs/);
  });

  test("Font size sm", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ sm: "sm" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:text-sm(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\ssm:text-sm/);
  });

  test("Font size md", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ md: "lg" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:text-lg(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\smd:text-lg/);
  });

  test("Font size lg", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ lg: "xl" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\slg:text-xl/);
  });

  test("Font size xl", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xl: "2xl" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:text-2xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxl:text-2xl/);
  });

  test("Font size xs active", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xs: "xs" })
      .active({ fontSize: { xs: "sm" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:text-xs(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:active:text-sm(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxs:text-xs\sxs:active:text-sm/);
  });

  test("Font size sm active", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ sm: "sm" })
      .active({ fontSize: { sm: "lg" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:text-sm(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:active:text-lg(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\ssm:text-sm\ssm:active:text-lg/);
  });

  test("Font size md active", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ md: "lg" })
      .active({ fontSize: { md: "xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:text-lg(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:active:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\smd:text-lg\smd:active:text-xl/);
  });

  test("Font size lg active", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ lg: "xl" })
      .active({ fontSize: { lg: "2xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:active:text-2xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\slg:text-xl\slg:active:text-2xl/);
  });

  test("Font size xl active", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xl: "2xl" })
      .active({ fontSize: { xl: "3xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:text-2xl(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:active:text-3xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxl:text-2xl\sxl:active:text-3xl/);
  });

  test("Font size xs disabled", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xs: "xs" })
      .disabled({ fontSize: { xs: "sm" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:text-xs(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:disabled:text-sm(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxs:text-xs\sxs:disabled:text-sm/);
  });

  test("Font size sm disabled", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ sm: "sm" })
      .disabled({ fontSize: { sm: "lg" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:text-sm(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:disabled:text-lg(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\ssm:text-sm\ssm:disabled:text-lg/);
  });

  test("Font size md disabled", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ md: "lg" })
      .disabled({ fontSize: { md: "xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:text-lg(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:disabled:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\smd:text-lg\smd:disabled:text-xl/);
  });

  test("Font size lg disabled", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ lg: "xl" })
      .disabled({ fontSize: { lg: "2xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:disabled:text-2xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\slg:text-xl\slg:disabled:text-2xl/);
  });

  test("Font size xl disabled", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xl: "2xl" })
      .disabled({ fontSize: { xl: "3xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:text-2xl(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:disabled:text-3xl(?!<\S)/);
    expect(stylesMapper).toMatch(
      /text-base\sxl:text-2xl\sxl:disabled:text-3xl/
    );
  });

  test("Font size xs hover", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xs: "xs" })
      .hover({ fontSize: { xs: "sm" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:text-xs(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:text-sm(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxs:text-xs\sxs:hover:text-sm/);
  });

  test("Font size sm hover", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ sm: "sm" })
      .hover({ fontSize: { sm: "lg" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:text-sm(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:hover:text-lg(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\ssm:text-sm\ssm:hover:text-lg/);
  });

  test("Font size md hover", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ md: "lg" })
      .hover({ fontSize: { md: "xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:text-lg(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\smd:text-lg\smd:hover:text-xl/);
  });

  test("Font size lg hover", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ lg: "xl" })
      .hover({ fontSize: { lg: "2xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:hover:text-2xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\slg:text-xl\slg:hover:text-2xl/);
  });

  test("Font size xl hover", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xl: "2xl" })
      .hover({ fontSize: { xl: "3xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:text-2xl(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:hover:text-3xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxl:text-2xl\sxl:hover:text-3xl/);
  });

  test("Font size xs open", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xs: "xs" })
      .open({ fontSize: { xs: "sm" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:text-xs(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:open:text-sm(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxs:text-xs\sxs:open:text-sm/);
  });

  test("Font size sm open", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ sm: "sm" })
      .open({ fontSize: { sm: "lg" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:text-sm(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:open:text-lg(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\ssm:text-sm\ssm:open:text-lg/);
  });

  test("Font size md open", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ md: "lg" })
      .open({ fontSize: { md: "xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:text-lg(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:open:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\smd:text-lg\smd:open:text-xl/);
  });

  test("Font size lg open", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ lg: "xl" })
      .open({ fontSize: { lg: "2xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:text-xl(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:open:text-2xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\slg:text-xl\slg:open:text-2xl/);
  });

  test("Font size xl open", () => {
    const stylesMapper = new StylesMapper()
      .fontSize("base")
      .fontSize({ xl: "2xl" })
      .open({ fontSize: { xl: "3xl" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:text-2xl(?!<\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:open:text-3xl(?!<\S)/);
    expect(stylesMapper).toMatch(/text-base\sxl:text-2xl\sxl:open:text-3xl/);
  });
});

describe("Grid template columns for breakpoint", () => {
  test("Grid columns xs", () => {
    const stylesMapper = new StylesMapper()
      .gridColumns(2)
      .gridColumns({ xs: 2 })
      .gridColumns({ xs: 1 })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)grid-cols-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:grid-cols-1(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:grid-cols-2(?!\S)/);
    expect(stylesMapper).toMatch(/grid-cols-2\sxs:grid-cols-1/);
  });

  test("Grid columns override xs", () => {
    const stylesMapper = new StylesMapper()
      .gridColumns(1)
      .gridColumns(10)
      .gridColumns({ xs: 1 })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)grid-cols-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:grid-cols-1(?!\S)/);
    expect(stylesMapper).toMatch(/grid-cols-10\sxs:grid-cols-1/);
    expect(stylesMapper).not.toMatch(/(?<!\S)grid-cols-1(?!\S)/);
  });
});

describe("Mixed in breakpoint", () => {
  test("Flex justify", () => {
    const stylesMapper = new StylesMapper()
      .justifyContent({
        xs: "center",
        sm: "end",
        md: "start",
        lg: "around",
        xl: "normal",
      })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)xs:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:justify-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:justify-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:justify-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:justify-around(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:justify-normal(?!\S)/);
  });

  test("Flex direction", () => {
    const stylesMapper = new StylesMapper()
      .direction({
        xs: "row",
        sm: "row",
        md: "row",
        lg: "column",
        xl: "row",
      })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)xs:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:flex-row(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:flex-row(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:flex-row(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:flex-col(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:flex-row(?!\S)/);
  });

  test("Flex align and flex align in breakpoints", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .alignItems("center")
      .alignItems({
        xs: "center",
        sm: "end",
        md: "start",
        lg: "stretch",
        xl: "baseline",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-center(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:items-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:items-stretch(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:items-baseline(?!\S)/);
  });

  test("Flex justify and flex justify in breakpoint", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .justifyContent("center")
      .justifyContent({
        xs: "center",
        sm: "end",
        md: "start",
        lg: "around",
        xl: "normal",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:justify-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:justify-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:justify-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:justify-around(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:justify-normal(?!\S)/);
  });

  test("Flex direction and flex direction in breakpoint", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .direction("column")
      .direction({
        xs: "row",
        sm: "row",
        md: "row",
        lg: "column",
        xl: "row",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex-col(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xs:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)sm:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)md:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)lg:flex(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:flex-row(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:flex-row(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:flex-row(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:flex-col(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:flex-row(?!\S)/);
  });
});

describe("Padding in breakpoint", () => {
  test("Padding breakpoint only", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        xs: "px",
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:p-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:p-1(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:p-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:p-3(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:p-4(?!\S)/);
  });

  test("Padding breakpoint only", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        xs: "px",
        sm: undefined,
        md: undefined,
        lg: undefined,
        xl: undefined,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:p-px(?!\S)/);
  });

  test("Padding breakpoint only sm", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        sm: 1,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)sm:p-1(?!\S)/);
  });

  test("Padding breakpoint only lg", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        lg: 1,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)lg:p-1(?!\S)/);
  });

  test("Padding breakpoint only xl", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        xl: 1,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xl:p-1(?!\S)/);
  });

  test("Padding axis in breakpoint", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        xs: { x: "px", y: 2 },
        md: { x: 8, y: 6 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:px-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:py-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:px-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:py-6(?!\S)/);
  });

  test("Padding side in breakpoint", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        xs: { top: "px" },
        md: { top: 10, bottom: 5 },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:pt-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:pt-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:pb-5(?!\S)/);
  });

  test("Padding side in breakpoint hover", () => {
    const stylesMapper = new StylesMapper()
      .padding({
        xs: { top: "px" },
        md: { top: 10, bottom: 5 },
      })
      .hover({ padding: { lg: { left: 8 } } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:pt-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:pt-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:pb-5(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:hover:pl-8(?!\S)/);
    expect(stylesMapper).toMatch(/xs:pt-px\smd:pb-5\smd:pt-10\slg:hover:pl-8/);
  });
});

describe("Text in breakpoint", () => {
  test("Font size", () => {
    const stylesMapper = new StylesMapper()
      .fontSize({
        xs: "xs",
        sm: "sm",
        md: "lg",
        lg: "2xl",
        xl: "3xl",
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:text-xs(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:text-sm(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:text-lg(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:text-2xl(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:text-3xl(?!\S)/);
  });
});

describe("Mixed in breakpoint", () => {
  test("Flex, basis, text, background", () => {
    const stylesMapper = new StylesMapper()
      .display("flex")
      .alignItems("center")
      .alignItems({ xl: "start" })
      .justifyContent("center")
      .justifyContent({ xl: "end" })
      .direction("column")
      .basis("full")
      .maxWidth("full")
      .textColor("error")
      .fontSize("base")
      .fontWeight("semibold")
      .textCase("uppercase")
      .backgroundColor("primary")
      .backgroundOpacity(40)
      .padding(4)
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)items-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)justify-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)flex-col(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)basis-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)text-error(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)text-base(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)font-semibold(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)bg-primary(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)bg-opacity-40(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)p-4(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)xl:flex(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:items-start(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:justify-end(?!\S)/);
  });
});

describe("Width in breakpoint", () => {
  test("Width", () => {
    const stylesMapper = new StylesMapper()
      .width("screen")
      .width({ xs: "dvw", sm: "auto", md: "10/12", lg: "px", xl: "fit" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)w-screen(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:w-dvw(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:w-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:w-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:w-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:w-fit(?!\S)/);
  });

  test("Width zero", () => {
    const stylesMapper = new StylesMapper()
      .width("screen")
      .width({ xs: 0, sm: "auto", md: "10/12", lg: "px", xl: "fit" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)w-screen(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:w-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:w-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:w-10\/12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:w-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:w-fit(?!\S)/);
  });
});

describe("Max width in breakpoint", () => {
  test("Width", () => {
    const stylesMapper = new StylesMapper()
      .maxWidth(2)
      .maxWidth({ xs: 3, sm: 4, md: 5, lg: 6, xl: 7 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)max-w-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:max-w-3(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:max-w-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:max-w-5(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:max-w-6(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:max-w-7(?!\S)/);
    expect(stylesMapper).toMatch(
      /max-w-2\sxs:max-w-3\ssm:max-w-4\smd:max-w-5\slg:max-w-6\sxl:max-w-7/
    );
  });

  test("Width xs", () => {
    const stylesMapper = new StylesMapper()
      .width(20)
      .maxWidth(10)
      .maxWidth({ xs: 8 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)w-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-w-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:max-w-8(?!\S)/);
    expect(stylesMapper).toMatch(/w-20\smax-w-10\sxs:max-w-8/);
  });

  test("Width sm", () => {
    const stylesMapper = new StylesMapper()
      .width(20)
      .maxWidth(10)
      .maxWidth({ sm: 8 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)w-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-w-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:max-w-8(?!\S)/);
    expect(stylesMapper).toMatch(/w-20\smax-w-10\ssm:max-w-8/);
  });

  test("Width md", () => {
    const stylesMapper = new StylesMapper()
      .width(20)
      .maxWidth(10)
      .maxWidth({ md: 8 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)w-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-w-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:max-w-8(?!\S)/);
    expect(stylesMapper).toMatch(/w-20\smax-w-10\smd:max-w-8/);
  });

  test("Width lg", () => {
    const stylesMapper = new StylesMapper()
      .width(20)
      .maxWidth(10)
      .maxWidth({ lg: 8 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)w-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-w-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:max-w-8(?!\S)/);
    expect(stylesMapper).toMatch(/w-20\smax-w-10\slg:max-w-8/);
  });

  test("Width xl", () => {
    const stylesMapper = new StylesMapper()
      .width(20)
      .maxWidth(10)
      .maxWidth({ xl: 8 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)w-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-w-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:max-w-8(?!\S)/);
    expect(stylesMapper).toMatch(/w-20\smax-w-10\sxl:max-w-8/);
  });
});

describe("Height in breakpoint", () => {
  test("Height", () => {
    const stylesMapper = new StylesMapper()
      .height("screen")
      .height({ xs: "dvh", sm: "auto", md: 10, lg: "px", xl: "fit" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)h-screen(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:h-dvh(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:h-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:h-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:h-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:h-fit(?!\S)/);
  });

  test("Height zero", () => {
    const stylesMapper = new StylesMapper()
      .height("screen")
      .height({ xs: 0, sm: "auto", md: 10, lg: "px", xl: "fit" })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)h-screen(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:h-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:h-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:h-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:h-px(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:h-fit(?!\S)/);
  });
});

describe("Margin in breakpoint", () => {
  test("Margin breakpoint only", () => {
    const stylesMapper = new StylesMapper()
      .margin(0)
      .margin({ xs: 4, md: 2 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)m-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:m-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:m-2(?!\S)/);
  });

  test("Margin axis", () => {
    const stylesMapper = new StylesMapper()
      .margin(0)
      .margin({ md: { x: 4, y: 2 } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)m-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:mx-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:my-2(?!\S)/);
  });

  test("Margin side", () => {
    const stylesMapper = new StylesMapper()
      .margin(0)
      .margin({
        md: {
          top: 2,
          right: 0,
          bottom: 4,
          left: "auto",
        },
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)m-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:mt-2(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:mr-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:mb-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:ml-auto(?!\S)/);
  });

  test("Margin axis hover", () => {
    const stylesMapper = new StylesMapper()
      .margin(0)
      .hover({ margin: { xs: { x: 4 }, md: { x: 8 } } })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)m-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:hover:mx-4(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:hover:mx-8(?!\S)/);
    expect(stylesMapper).toMatch(/m-0\sxs:hover:mx-4\smd:hover:mx-8/);
  });
});

describe("Size in breakpoint", () => {
  test("Size", () => {
    const stylesMapper = new StylesMapper()
      .size({
        xs: 8,
        sm: 10,
        md: 12,
        lg: 14,
        xl: 16,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:size-8(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:size-10(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:size-12(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:size-14(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:size-16(?!\S)/);
  });

  test("Size sm", () => {
    const stylesMapper = new StylesMapper()
      .size({
        sm: 0,
      })
      .size({
        sm: 10,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)sm:size-10(?!\S)/);
  });

  test("Size md", () => {
    const stylesMapper = new StylesMapper()
      .size({
        md: 0,
      })
      .size({
        md: 10,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)md:size-10(?!\S)/);
  });

  test("Size lg", () => {
    const stylesMapper = new StylesMapper()
      .size({
        lg: 0,
      })
      .size({
        lg: 10,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)lg:size-10(?!\S)/);
  });

  test("Size xl", () => {
    const stylesMapper = new StylesMapper()
      .size({
        xl: 0,
      })
      .size({
        xl: 10,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xl:size-10(?!\S)/);
  });

  test("Size zero", () => {
    const stylesMapper = new StylesMapper()
      .size({
        xs: 0,
        sm: 0,
        md: 0,
        lg: 0,
        xl: 0,
      })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)xs:size-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:size-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:size-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:size-0(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:size-0(?!\S)/);
  });

  test("Size px", () => {
    const stylesMapper = new StylesMapper().size({ xs: "px" }).write();
    expect(stylesMapper).toMatch(/(?<!\S)xs:size-px(?!\S)/);
  });
});

describe("Overflow", () => {
  test("Overflow auto", () => {
    const stylesMapper = StylesMapper.create().overflow("auto").write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
  });

  test("Overflow auto", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("hidden")
      .overflow("auto")
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).not.toMatch(/(?<!\S)overflow-hidden(?!\S)/);
  });

  test("Overflow hidden", () => {
    const stylesMapper = StylesMapper.create().overflow("hidden").write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-hidden(?!\S)/);
  });

  test("Overflow clip", () => {
    const stylesMapper = StylesMapper.create().overflow("clip").write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-clip(?!\S)/);
  });

  test("Overflow visible", () => {
    const stylesMapper = StylesMapper.create().overflow("visible").write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-visible(?!\S)/);
  });

  test("Overflow scroll", () => {
    const stylesMapper = StylesMapper.create().overflow("scroll").write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-scroll(?!\S)/);
  });

  test("Overflow axle x auto", () => {
    const stylesMapper = StylesMapper.create().overflow({ x: "auto" }).write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-auto(?!\S)/);
  });

  test("Overflow axle x hidden", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ x: "hidden" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-hidden(?!\S)/);
  });

  test("Overflow axle x clip", () => {
    const stylesMapper = StylesMapper.create().overflow({ x: "clip" }).write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-clip(?!\S)/);
  });

  test("Overflow axle x visible", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ x: "visible" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-visible(?!\S)/);
  });

  test("Overflow axle x scroll", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ x: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-scroll(?!\S)/);
  });

  test("Overflow axle y auto", () => {
    const stylesMapper = StylesMapper.create().overflow({ y: "auto" }).write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-auto(?!\S)/);
  });

  test("Overflow axle y hidden", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ y: "hidden" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-hidden(?!\S)/);
  });

  test("Overflow axle y clip", () => {
    const stylesMapper = StylesMapper.create().overflow({ y: "clip" }).write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-clip(?!\S)/);
  });

  test("Overflow axle y visible", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ y: "visible" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-visible(?!\S)/);
  });

  test("Overflow axle y scroll", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ y: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-scroll(?!\S)/);
  });

  test("Overflow axis auto", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ x: "auto", y: "auto" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-auto(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-x-auto\soverflow-y-auto/);
  });

  test("Overflow axis hidden", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ x: "hidden", y: "hidden" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-hidden(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-hidden(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-x-hidden\soverflow-y-hidden/);
  });

  test("Overflow axis clip", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ x: "clip", y: "clip" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-clip(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-clip(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-x-clip\soverflow-y-clip/);
  });

  test("Overflow axis visible", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ x: "visible", y: "visible" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-visible(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-visible(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-x-visible\soverflow-y-visible/);
  });

  test("Overflow axis scroll", () => {
    const stylesMapper = StylesMapper.create()
      .overflow({ x: "scroll", y: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-x-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)overflow-y-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-x-scroll\soverflow-y-scroll/);
  });

  test("Overflow scroll active", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .active({ overflow: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:overflow-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\sactive:overflow-scroll/);
  });

  test("Overflow scroll disabled", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .disabled({ overflow: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:overflow-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\sdisabled:overflow-scroll/);
  });

  test("Overflow scroll hover", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .hover({ overflow: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:overflow-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\shover:overflow-scroll/);
  });

  test("Overflow scroll open", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .open({ overflow: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:overflow-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\sopen:overflow-scroll/);
  });
});

describe("Overflow in breakpoints", () => {
  test("Overflow scroll xs", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ xs: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:overflow-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\sxs:overflow-scroll/);
  });

  test("Overflow scroll sm", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ sm: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:overflow-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\ssm:overflow-scroll/);
  });

  test("Overflow scroll md", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ md: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:overflow-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\smd:overflow-scroll/);
  });

  test("Overflow scroll lg", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ lg: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:overflow-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\slg:overflow-scroll/);
  });

  test("Overflow scroll xl", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ xl: "scroll" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:overflow-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\sxl:overflow-scroll/);
  });

  test("Overflow x scroll xs", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ xs: { x: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:overflow-x-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\sxs:overflow-x-scroll/);
  });

  test("Overflow x scroll sm", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ sm: { x: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:overflow-x-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\ssm:overflow-x-scroll/);
  });

  test("Overflow x scroll md", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ md: { x: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:overflow-x-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\smd:overflow-x-scroll/);
  });

  test("Overflow x scroll lg", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ lg: { x: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:overflow-x-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\slg:overflow-x-scroll/);
  });

  test("Overflow x scroll xl", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ xl: { x: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:overflow-x-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\sxl:overflow-x-scroll/);
  });

  test("Overflow y scroll xs", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ xs: { y: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:overflow-y-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\sxs:overflow-y-scroll/);
  });

  test("Overflow y scroll sm", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ sm: { y: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:overflow-y-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\ssm:overflow-y-scroll/);
  });

  test("Overflow y scroll md", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ md: { y: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:overflow-y-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\smd:overflow-y-scroll/);
  });

  test("Overflow y scroll lg", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ lg: { y: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:overflow-y-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\slg:overflow-y-scroll/);
  });

  test("Overflow y scroll xl", () => {
    const stylesMapper = StylesMapper.create()
      .overflow("auto")
      .overflow({ xl: { y: "scroll" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)overflow-auto(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:overflow-y-scroll(?!\S)/);
    expect(stylesMapper).toMatch(/overflow-auto\sxl:overflow-y-scroll/);
  });
});

describe("Text align", () => {
  test("Text align center", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("start")
      .textAlign("center")
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-center(?!\S)/);
  });

  test("Text align end", () => {
    const stylesMapper = StylesMapper.create().textAlign("end").write();
    expect(stylesMapper).toMatch(/(?<!\S)text-end(?!\S)/);
  });

  test("Text align justify", () => {
    const stylesMapper = StylesMapper.create().textAlign("justify").write();
    expect(stylesMapper).toMatch(/(?<!\S)text-justify(?!\S)/);
  });

  test("Text align left", () => {
    const stylesMapper = StylesMapper.create().textAlign("left").write();
    expect(stylesMapper).toMatch(/(?<!\S)text-left(?!\S)/);
  });

  test("Text align right", () => {
    const stylesMapper = StylesMapper.create().textAlign("right").write();
    expect(stylesMapper).toMatch(/(?<!\S)text-right(?!\S)/);
  });

  test("Text align start", () => {
    const stylesMapper = StylesMapper.create().textAlign("start").write();
    expect(stylesMapper).toMatch(/(?<!\S)text-start(?!\S)/);
  });

  test("Text align end active", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("center")
      .active({ textAlign: "end" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)active:text-end(?!\S)/);
    expect(stylesMapper).toMatch(/text-center\sactive:text-end/);
  });

  test("Text align end disabled", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("center")
      .disabled({ textAlign: "end" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)disabled:text-end(?!\S)/);
    expect(stylesMapper).toMatch(/text-center\sdisabled:text-end/);
  });

  test("Text align end hover", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("center")
      .hover({ textAlign: "end" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)hover:text-end(?!\S)/);
    expect(stylesMapper).toMatch(/text-center\shover:text-end/);
  });

  test("Text align end open", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("center")
      .open({ textAlign: "end" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-center(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)open:text-end(?!\S)/);
    expect(stylesMapper).toMatch(/text-center\sopen:text-end/);
  });
});

describe("Text align in breakpoints", () => {
  test("Text align center xs", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("end")
      .textAlign({ xs: "center" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:text-center(?!\S)/);
    expect(stylesMapper).toMatch(/text-end\sxs:text-center/);
  });

  test("Text align center sm", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("end")
      .textAlign({ sm: "center" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:text-center(?!\S)/);
    expect(stylesMapper).toMatch(/text-end\ssm:text-center/);
  });

  test("Text align center md", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("end")
      .textAlign({ md: "center" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:text-center(?!\S)/);
    expect(stylesMapper).toMatch(/text-end\smd:text-center/);
  });

  test("Text align center lg", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("end")
      .textAlign({ lg: "center" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:text-center(?!\S)/);
    expect(stylesMapper).toMatch(/text-end\slg:text-center/);
  });

  test("Text align center xl", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("end")
      .textAlign({ xl: "center" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:text-center(?!\S)/);
    expect(stylesMapper).toMatch(/text-end\sxl:text-center/);
  });

  test("Text align brekpoints", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("end")
      .textAlign({ xs: "justify", sm: "left", lg: "right", xl: "center" })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:text-justify(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:text-left(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:text-right(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:text-center(?!\S)/);
    expect(stylesMapper).toMatch(
      /text-end\sxs:text-justify\ssm:text-left\slg:text-right\sxl:text-center/
    );
  });

  test("Text align center active xl", () => {
    const stylesMapper = StylesMapper.create()
      .textAlign("end")
      .active({ textAlign: { xl: "center" } })
      .write();
    expect(stylesMapper).toMatch(/(?<!\S)text-end(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:active:text-center(?!\S)/);
    expect(stylesMapper).toMatch(/text-end\sxl:active:text-center/);
  });
});

describe("Max size", () => {
  test("Max height", () => {
    const stylesMapper = new StylesMapper().height(20).maxHeight("fit").write();

    expect(stylesMapper).toMatch(/(?<!\S)h-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-h-fit(?!\S)/);
  });

  test("Max height breakpoints", () => {
    const stylesMapper = new StylesMapper()
      .height(20)
      .maxHeight("fit")
      .maxHeight({ xs: "screen", sm: "full", md: "max", lg: 28, xl: 96 })
      .write();

    expect(stylesMapper).toMatch(/(?<!\S)h-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-h-fit(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:max-h-screen(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:max-h-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:max-h-max(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:max-h-28(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:max-h-96(?!\S)/);
  });

  test("Max width", () => {
    const stylesMapper = new StylesMapper().width(20).maxWidth("fit").write();

    expect(stylesMapper).toMatch(/(?<!\S)w-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-w-fit(?!\S)/);
  });

  test("Max width breakpoints", () => {
    const stylesMapper = new StylesMapper()
      .width(20)
      .maxWidth(0)
      .maxWidth("fit")
      .maxWidth({ xs: "screen-xs", sm: "full", md: "max", lg: 28, xl: 96 })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)max-w-0(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)w-20(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)max-w-fit(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:max-w-screen-xs(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:max-w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:max-w-max(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:max-w-28(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:max-w-96(?!\S)/);
  });
});

describe("Min Size", () => {
  test("Min height", () => {
    const stylesMapper = StylesMapper.create().minHeight(72).write();
    expect(stylesMapper).toMatch(/(?<!\S)min-h-72(?!\S)/);
  });

  test("Min height breakpoints", () => {
    const stylesMapper = StylesMapper.create()
      .minHeight("full")
      .minHeight(72)
      .minHeight({
        xs: "dvh",
        sm: "lvh",
        md: "full",
        lg: 80,
        xl: 96,
      })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)min-h-full(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)min-h-72(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:min-h-dvh(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:min-h-lvh(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:min-h-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:min-h-80(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:min-h-96(?!\S)/);
  });

  test("Min width", () => {
    const stylesMapper = StylesMapper.create().minWidth(80).write();
    expect(stylesMapper).toMatch(/(?<!\S)min-w-80(?!\S)/);
  });

  test("Min width breakpoints", () => {
    const stylesMapper = StylesMapper.create()
      .minWidth("full")
      .minWidth(80)
      .minWidth({
        xs: "full",
        sm: "fit",
        md: 72,
        lg: 80,
        xl: 96,
      })
      .write();

    expect(stylesMapper).not.toMatch(/(?<!\S)min-w-full(?!\S)/);

    expect(stylesMapper).toMatch(/(?<!\S)min-w-80(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xs:min-w-full(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)sm:min-w-fit(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)md:min-w-72(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)lg:min-w-80(?!\S)/);
    expect(stylesMapper).toMatch(/(?<!\S)xl:min-w-96(?!\S)/);
  });
});
